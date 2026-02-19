// server.js
import express from "express";
import multer from "multer";
import ExcelJS from "exceljs";
import fs from "fs";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdfParseCJS = require("pdf-parse"); // CommonJS import

// Wrap pdfParse to handle default property in case of ESM import
const pdfParse = pdfParseCJS.default || pdfParseCJS;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure uploads folder exists
fs.mkdirSync(join(__dirname, "uploads"), { recursive: true });

const app = express();
const upload = multer({ dest: join(__dirname, "uploads") });
app.use(cors());

app.post("/convert", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  if (!req.file.mimetype.includes("pdf")) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ error: "Only PDF files allowed" });
  }

  try {
    console.log("Uploaded file:", req.file.originalname);

    // Read PDF buffer
    const dataBuffer = fs.readFileSync(req.file.path);
    console.log("Read PDF buffer, size:", dataBuffer.length);

    // Parse PDF text
    const pdfData = await pdfParse(dataBuffer);
    console.log("Parsed PDF text length:", pdfData.text.length);

    if (!pdfData.text || pdfData.text.trim() === "") {
      return res.status(400).json({ error: "PDF has no extractable text" });
    }

    // Convert text into rows for Excel
    const rows = pdfData.text
      .split("\n")
      .map(r => r.trim())
      .filter(r => r.length > 0)
      .map(r => r.split(/\s{2,}/)); // split by 2+ spaces

    // Create Excel workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    if (rows.length > 0) {
      rows.forEach(r => worksheet.addRow(r));
    } else {
      worksheet.addRow(["No data extracted from PDF"]);
    }

    // Write Excel to buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Send file as attachment
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="converted.xlsx"'
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.send(buffer);

  } catch (err) {
    console.error("Error processing PDF:", err);
    res.status(500).json({ error: "Error processing PDF" });
  } finally {
    // Cleanup uploaded file
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
  }
});

app.listen(3000, () =>
  console.log("Backend running on http://localhost:3000")
);

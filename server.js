import express from "express";
import multer from "multer";
import ExcelJS from "exceljs";
import fs from "fs";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse"); // ✅ CommonJS function

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const upload = multer({ dest: "uploads/" });
app.use(cors());

app.post("/convert", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    if (!req.file.mimetype.includes("pdf")) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ error: "Only PDF files allowed" });
    }

    const dataBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(dataBuffer); // ✅ Works now

    const rows = pdfData.text
      .split("\n")
      .map(row => row.trim())
      .filter(row => row.length > 0)
      .map(row => row.split(/\s{2,}/));

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");
    rows.forEach(row => worksheet.addRow(row));

    const outputPath = join(__dirname, "converted.xlsx");
    await workbook.xlsx.writeFile(outputPath);

    res.download(outputPath, "converted.xlsx", () => {
      fs.unlinkSync(req.file.path);
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error processing PDF" });
  }
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));

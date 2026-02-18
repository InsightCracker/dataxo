import FileUploader from "../components/FileUploader";

const PDFConverter = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>PDF → Excel / CSV Converter</h1>
      <FileUploader />
    </div>
  );
}

export default PDFConverter
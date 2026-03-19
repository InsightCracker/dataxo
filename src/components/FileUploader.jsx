import { useState } from "react";

export default function FileUploader() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    // Validate file type
    if (selectedFile.type !== "application/pdf") {
      setError("Only PDF files are allowed");
      setFile(null);
      return;
    }

    // Validate size (10MB)
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB");
      setFile(null);
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    handleFile(selectedFile);
  };

  // Select all buttons
  const buttons = document.querySelectorAll('.type-btn');

  // Loop through each button and attach click event
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      buttons.forEach(b => b.classList.remove('active'));
      
      // Add 'active' class to the clicked button
      btn.classList.add('active');
    });
  });

  return (
    <div className="uploader-container">

      <div className="upload-card">
        <h2 className="upload-title">📄 PDF Converter</h2>

        {/* Drop Zone */}
        <div
          className="drop-zone"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="upload-icon">📄</div>

          <p style={{
            marginBottom: '10px'
          }} className="upload-text">
            Drag & drop your PDF here 
          </p>

          <p className="upload-text">
            or
          </p>

          <label className="upload-btn">
            Choose File
            <input
              type="file"
              accept="application/pdf"
              onChange={handleChange}
              hidden
            />
          </label>

          <p style={{
            marginBottom: '2px'
          }} className="upload-text">
            Supported: PDF • Max Size: 10MB
          </p>
        </div>

        {/* Error */}
        {error && <p className="error-text">{error}</p>}

        {/* File Preview */}
        {file && (
          <div className="file-info">
            <p className="file-name">📄 {file.name}</p>
            <p className="file-size">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        <div class="options">
          <h4 style={{
            marginBottom: '.5rem'
          }}>Options:</h4>
          <div class="option-item">
            <input type="checkbox" checked />
            <label>Extract tables only</label>
          </div>
          <div class="option-item">
            <input type="checkbox" checked />
            <label>Include headers</label>
          </div>
          <div class="option-item">
            <input type="checkbox" />
            <label>Clean Format</label>
          </div>
        </div>

        <div class="convert-types">
          <button class="type-btn">CSV</button>
          <button class="type-btn">Excel</button>
          <button class="type-btn">JSON</button>
        </div>

        {/* Convert Button */}
        {file && (
          <button className="convert-btn">
            Convert File
          </button>
        )}
      </div>
    </div>
  );
}
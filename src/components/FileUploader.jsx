import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const FileUploader = () => {
  const [status, setStatus] = useState("");

  const onDrop = async (acceptedFiles) => {
    if (!acceptedFiles.length) return;

    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);

    setStatus("Uploading...");

    try {
      const response = await axios.post("http://localhost:3000/convert", formData, {
        responseType: "blob",
      });

      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name.replace(".pdf", ".xlsx");
      document.body.appendChild(a);
      a.click();
      a.remove();
      setStatus("Download complete!");
    } catch (err) {
      console.error(err);
      setStatus("Error uploading/converting file");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { "application/pdf": [".pdf"] } });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
            color: "black",
          border: "2px dashed #666",
          padding: "50px",
          textAlign: "center",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop your PDF here...</p> : <p>Drag & drop a PDF file here, or click to select</p>}
      </div>
      <p>{status}</p>
    </div>
  );
};

export default FileUploader;

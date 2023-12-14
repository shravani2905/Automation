import React, { useState, useEffect } from 'react';
import './Print.css';
import { pdfjs } from 'react-pdf';

function Print() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    // Set the workerSrc path before using PDF.js
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.13.266/build/pdf.worker.min.js`;
  }, []);

  const handleFileChange = async (event) => {
    const files = event.target.files;

    // Assuming the uploaded file is a PDF
    const file = files[0];

    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = async () => {
        const arrayBuffer = fileReader.result;

        // Use pdfjs to get the number of pages
        const pdf = await pdfjs.getDocument(new Uint8Array(arrayBuffer)).promise;
        const pages = pdf.numPages;

        setPageCount(pages);
      };

      fileReader.readAsArrayBuffer(file);
    }

    setSelectedFiles([...files]);
  };

  const handleFileDeselect = (file) => {
    setSelectedFiles(selectedFiles.filter((f) => f !== file));
    setPageCount(null);
  };

  return (
    <div className="container">
      <h2>File Upload</h2>
      <input type="file" multiple onChange={handleFileChange} />

      <div>
        <h3>Selected Files:</h3>
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>
              {file.name}
              <button
                onClick={() => handleFileDeselect(file)}
                className="btn delete text-center btn-danger mx-3"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>

      {pageCount !== null && (
        <div>
          <h3>Number of Pages:</h3>
          <p>{pageCount}</p>
        </div>
      )}
    </div>
  );
}

export default Print;


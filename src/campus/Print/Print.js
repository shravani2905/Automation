import React, { useState } from 'react';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles([...files, ...Array.from(selectedFiles)]);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <div>
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <span>{file.name}</span>
            <button className="delete-button" onClick={() => handleDeleteFile(index)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;

import React, { useState } from 'react';

const GradeUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // TODO: Implement file upload logic here
        alert(`Uploading file: ${file.name}`);
    };

    return (
        <div>
            <h1>Upload Student Grades</h1>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!file}>Upload</button>
        </div>
    );
};

export default GradeUpload;
import React, { useState } from 'react';
import { Box } from '@material-ui/core';

export default function UploadForm() {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

  const [currentFile, setCurrentFile] = useState({
    name: ''
  });
  const [error, setError] = useState(null);

  function hanldeChange(e) {
    const selected = e.target.files[0];
    console.log(currentFile);

    if(selected && allowedTypes.includes(selected.type)) {
      setCurrentFile(selected);
      console.log(currentFile);
      setError('');
    } else {
      setCurrentFile(null);
      setError('Choose a supported file');
    }
  }

  return (
    <Box>
      <input type='file' onChange={hanldeChange} />
      <p>{error ? error : currentFile.name}</p>
    </Box>
  );
}
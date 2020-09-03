import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import ProgressBar from './ProgressBar';

const initialValue = {
  name: ''
};

export default function UploadForm() {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

  const [currentFile, setCurrentFile] = useState(initialValue);
  const [error, setError] = useState(null);

  function hanldeChange(e) {
    const selected = e.target.files[0];
    console.log(currentFile);

    if(selected && allowedTypes.includes(selected.type)) {
      setCurrentFile(selected);
      console.log(currentFile);
      setError('');
    } else if(selected === undefined) {
      setCurrentFile(initialValue);
      setError('No image selected');
    } else {
      setCurrentFile(initialValue);
      setError('Choose a supported image');
    }
  }

  return (
    <Box>
      <input type='file' onChange={hanldeChange} />
      <p>{error ? error : currentFile.name}</p>
      {currentFile.name && <ProgressBar file={currentFile} setFile={setCurrentFile} />}
    </Box>
  );
}
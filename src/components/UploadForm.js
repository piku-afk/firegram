import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import PreviewGrid from './PreviewGrid';

const initialValue = {
  name: ''
};

const useStyles = makeStyles({
  inputFile: {
    display: 'none'
  }
});

export default function UploadForm() {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  const [value, setValue] = useState('');
  const [caption, setCaption] = useState('');
  const [selectedFile, setSelectedFile] = useState(initialValue);
  const [previewImage, setPreviewIamge] = useState('');
  const [uploadFile, setUploadFile] = useState({});
  const [orientation, setOrientation] = useState('square');
  const [error, setError] = useState(null);
  const classes = useStyles();

  function hanldeChange(e) {
    const selected = e.target.files[0];

    //for image preview in PreviewGrid
   if(selected) {
    const reader = new FileReader();
    reader.readAsDataURL(selected);
    reader.onloadend = (e) => {
      setPreviewIamge(e.target.result);
    }
   }


    if(selected && allowedTypes.includes(selected.type)) {
      setSelectedFile(selected);
      setError('');
    } else if(selected === undefined) {
      setSelectedFile(initialValue);
      setError('No image selected');
    } else {
      setSelectedFile(initialValue);
      setError('Choose a supported image');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUploadFile(selectedFile);
    setCaption(value);
    setSelectedFile(initialValue);
    setValue('');
  }

  return (
    <Box>
      <form className='upload-form' onSubmit={handleSubmit}>
        <input className={classes.inputFile} id='upload-button' type='file' onChange={hanldeChange} />
        <label htmlFor="upload-button">
        <IconButton htmlFor='upload-button' component='span' >
          <AddAPhotoIcon />
        </IconButton>
        </label>

        <TextField
          autoComplete='off'
          value={value}
          onChange={e => setValue(e.target.value)}
          id="standard-basic" label="Add caption" 
        />

        <InputLabel id='select-type'>Type</InputLabel>
        <Select
          id='select'
          labelId="select-type"
          value={orientation}
          onChange={e => setOrientation(e.target.value)}
        >
          <MenuItem value='square'>Square</MenuItem>
          <MenuItem value='landscape'>Lanscape</MenuItem>
          <MenuItem value='potrait'>Potrait</MenuItem>
        </Select>

        <Button className='submit-button' type='submit' variant='outlined' > 
          Ready To Upload
        </Button>
      </form>
      <div className='below-form'>
        <Typography variant='body1' >
          {selectedFile.name && `Selected: ${selectedFile.name}`}
          <br />
          {selectedFile.size && `Size: ${(selectedFile.size/1024).toFixed(2)} kb`}
        </Typography>
        <Typography variant='body1' >
          {error ? error : uploadFile.name}
        </Typography>

        {uploadFile.name && <ProgressBar name={caption} file={uploadFile} setFile={setUploadFile} />}
      </div>
      <PreviewGrid value={value} image={previewImage} orientation={orientation} />
    </Box>
  );
}
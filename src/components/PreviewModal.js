import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


export default function PreviewModal({image, value, setIsOpen}) {
  return (
    <div className='modal'>
      <IconButton size='small' onClick={() => {
        setIsOpen(false);
        }}>
        <CloseIcon />
      </IconButton>
      
      <div className='img-wrapper preview-modal'>
        <img src={image} alt={value}/>
        <Typography variant={"subtitle2"} align='center' >
          {value}
        </Typography>
      </div>
    </div>
  );
};
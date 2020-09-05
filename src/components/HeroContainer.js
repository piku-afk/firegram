import React from 'react';

import {makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function HeroContainer() {

  const classes = useStyles();

  return (
    <Box className='hero__container'>
      <Typography variant='h5' align='center'>
        Hello I' m
      </Typography>
      <Typography variant='h3' align='center' >
        Sumit Kumar
      </Typography>
      <Typography variant='h6' align='center' >
       A Photpgrapher. I capture life
      </Typography>
      <div className="contact-buttons">
        <IconButton classes={{
          root: classes.link
        }} href='#'>
          <TwitterIcon />
        </IconButton>
        <IconButton classes={{
          root: classes.link
        }} href='#'>
          <FacebookIcon />
        </IconButton>
        <IconButton classes={{
          root: classes.link
        }} href='#'>
          <InstagramIcon />
        </IconButton>
      </div>
    </Box>
  );
}

const useStyles = makeStyles({
  link: {
    color: 'black'
  }
});
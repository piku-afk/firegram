import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function HeroContainer({reference}) {
  const classes = useStyles();

  return (
    <Box ref={reference} className='hero__container'>
      <div className="hero__background"></div>
      <Typography variant='body1' align='center'>
        Hello I' m
      </Typography>
      <Typography variant='h3' align='center' >
        <span className="white">Sumit Kumar</span>
      </Typography>
      <Typography variant='h6' align='center' >
      <span className="yellow">A Photpgrapher.</span> <span className="white">I capture life</span>
      </Typography>
      <div className="contact-buttons">
        <Typography variant='subtitle2' align='center'>
          Follow Me Here
        </Typography>
        <IconButton target="_blank" classes={{
          root: classes.link
        }} href='https://twitter.com/Sumit_cosmos'>
          <TwitterIcon />
        </IconButton>
        <IconButton target="_blank" classes={{
          root: classes.link
        }} href='https://www.facebook.com/profile.php?id=100022796920106'>
          <FacebookIcon />
        </IconButton>
        <IconButton target="_blank" classes={{
          root: classes.link
        }} href='https://www.instagram.com/picture_perfect_sk/'>
          <InstagramIcon />
        </IconButton>
      </div>
    </Box>
  );
}

const useStyles = makeStyles({
  link: {
    color: '#ffba00'
  }
});
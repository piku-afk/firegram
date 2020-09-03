import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function HeroContainer() {
  return (
    <Box className='hero__container'>
      <Typography variant='h3' align='center' >
        Your Pictures
      </Typography>
      <Typography variant='subtitle1' align='center' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cum!
      </Typography>
    </Box>
  );
}
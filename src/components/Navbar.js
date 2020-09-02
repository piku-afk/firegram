import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Navbar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5'>
          Firegram
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
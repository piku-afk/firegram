import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HeroContainer from './HeroContainer';
import { useInView } from 'react-intersection-observer';

export default function Navbar() {

  const [ref, inView] = useInView({
    threshold: .07
  });

  return (
    <>
    <AppBar position={ inView ? 'fixed' : 'absolute'}>
      <Toolbar>
        <Typography variant='h5'>
          Firegram
        </Typography>
      </Toolbar>
    </AppBar>
    <HeroContainer reference={ref} />
    </>
  );
}
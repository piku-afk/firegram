import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import HeroContainer from './components/HeroContainer';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container>
        <HeroContainer />
        <UploadForm />
        <ImageGrid />
      </Container>
    </div>
  );
}

export default App;

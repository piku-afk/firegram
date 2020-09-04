import React, { useState } from 'react';
import './App.css';
import useFirestore from './components/useFirestore';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import HeroContainer from './components/HeroContainer';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() { 
  const { docs } = useFirestore('images'); 
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <div className="app">
      <Navbar />

      <Container>
        <HeroContainer />
        <UploadForm />
        <ImageGrid images={docs} setModal={setModal} setSelected={setSelected} />
      </Container>
      
      {modal && <Modal selected={selected} images={docs} setModal={setModal} />}
    </div>
  );
}

export default App;

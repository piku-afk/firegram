import React from 'react';

import Container from '@material-ui/core/Container';

import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

export default function MainPage({admin, docs, modal, selected, setModal, setSelected}) {
  return (
    <>
      <Container>
        { admin && <UploadForm />}
        <ImageGrid 
        images={docs} 
        setModal={setModal} 
        setSelected={setSelected}
        />
      </Container>
      
      {modal && <Modal selected={selected} images={docs} setModal={setModal} />}
    </>
  );
}
import React, { useEffect } from 'react';

import Container from '@material-ui/core/Container';

import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

export default function MainPage({prev, setPrev,admin, docs, modal, selected, setModal, setSelected}) {

  useEffect(() => {
    window.onscroll = () => {
      if(window.scrollY !== 0) {
        setPrev(window.scrollY)
      };

      return () => {
        window.removeEventListener('scroll', () => {
          if(window.scrollY !== 0) {
            setPrev(window.scrollY)
          }
        })
      };
    }
  }, [prev, setPrev]);

  return (
    <>
      <Container>
        { admin && <UploadForm /> }
        { !admin && <ImageGrid 
        images={docs} 
        setModal={setModal} 
        setSelected={setSelected}
        /> }
      </Container>
      
      {modal && <Modal prev={prev} selected={selected} images={docs} setModal={setModal} />}
    </>
  );
}
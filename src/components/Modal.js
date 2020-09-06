import React, { useEffect } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';

export default function Modal({prev, selected, images, setModal}) {
  const setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: selected,
    arrows: false
  }

  useEffect(() => {

    document.querySelector('.app').classList.add('body--fixed');
    return () => {
      document.querySelector('.app').classList.remove('body--fixed');
      window.scrollTo(0, prev);
    }
  }, [prev]);

  return (
    <div className='modal'>
      <IconButton size='small' onClick={() => {
        setModal(false);
        }}>
        <CloseIcon />
      </IconButton>
  
        <Slider {...setting}> 
         {getSlides(images)}
        </Slider>
    </div>
  );
};

function getSlides(images) {
  return images.map(image => (
    <div key={image.id} className="img-wrapper">
      <img loading='lazy' src={image.url} alt={image.name}/>
      <Typography variant='subtitle2' align='center' >
        {image.name}
      </Typography>
    </div>
  ));
}
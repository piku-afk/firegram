import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';

export default function Modal({selected, images, setModal}) {

  const setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: selected,
    centerMode: true,
    arrows: false
  }


  return (
    <div className='modal'>
      <Slider {...setting}> 
       {getSlides(images)}
      </Slider>

      <IconButton size='small' onClick={() => {
        setModal(false);
      }}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

function getSlides(images) {
  return images.map(image => (
    <div key={image.id} className="img-wrapper">
      <img src={image.url} alt={image.name}/>
      <Typography variant='subtitle2' align='center' >
        {image.name}
      </Typography>
    </div>
  ));
}
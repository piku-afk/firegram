import React from 'react';
import Slider from 'react-slick';
import 'react-slick/';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

export default function Modal({selected, images, setModal}) {

  const setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: selected,
    // centerMode: true,
  }


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
      <img src={image.url} alt={image.name}/>
    </div>
  ));
}
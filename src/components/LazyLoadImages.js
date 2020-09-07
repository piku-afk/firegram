import React from 'react';
import { useInView } from 'react-intersection-observer';


export default function LazyLoadImages({image, index, setSelected, setModal}) {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div 
      ref={ref} 
      onClick={() => {
        setSelected(index);
        setModal(true);
      }} 
      className={`img-container ${getType(image.type)}`}>
      <img className='grid-image' src={ inView ? image.url : null} alt={image.name} />
    </div>
  );
}

function getType(type) {
  switch(type) {
    default:
    case 'potrait': return 'potrait';
    case 'square': return '';
    case 'landscape': return 'landscape';
  }
}
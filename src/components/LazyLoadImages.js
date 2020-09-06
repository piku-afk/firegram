import React from 'react';
import { useInView } from 'react-intersection-observer';


export default function LazyLoadImages({image, index, setSelected, setModal}) {

  
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div ref={ref} onClick={() => {
      setSelected(index);
      setModal(true);
      }} className='img-container'>
      <img className='grid-image' src={ inView ? image.url : null} alt={image.name} />
    </div>
  );
}
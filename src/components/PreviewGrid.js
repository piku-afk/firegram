import React, { useState } from 'react';
import PreviewModal from './PreviewModal';

export default function PreviewGrid({value, image, orientation}) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className='preview-grid'>
      <div className={`img-container ${orientation}`}
        onClick={() => setIsOpen(true)}>
        { image && <img className='grid-image preview-image' src={image && image} alt={`${value}`} />}
      </div>
    </div>
    {isOpen && <PreviewModal image={image} setIsOpen={setIsOpen} value={value} />}
    </>
  );
}
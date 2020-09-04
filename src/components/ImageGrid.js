import React from 'react';

export default function ImageGrid({setSelected, setModal, images}) {
  return (
    <div className="img-grid">
      {images && 
      images.map((doc, index) => {
        return (
          <div onClick={() => {
            setSelected(index);
            setModal(true);
            }} key={doc.id} className='img-container'>
            <img src={doc.url} alt={doc.name} />
          </div>
        );
      })}
    </div>
  );
}
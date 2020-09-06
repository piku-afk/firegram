import React from 'react';
import LazyLoadImages from './LazyLoadImages';

export default function ImageGrid({setSelected, setModal, images}) {

  return (
    <div className="img-grid">
      {images && 
      images.map((doc, index) => {
        return (
          <LazyLoadImages 
            key={doc.id}
            index={index} 
            setSelected={setSelected}
            setModal={setModal}
            image={doc} 
            />
        );
      })}
    </div>
  );
}
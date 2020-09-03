import React from 'react';
import useFirestore from './useFirestore';

export default function ImageGrid() {

  const { docs } = useFirestore('images'); 
  console.log(docs);

  return (
    <div className="img-grid">
      {docs && docs.map(doc => <GetImage key={doc.id} item={doc} />)}
    </div>
  );
}

function GetImage({item}) {
  return (
    <div className='img-container'>
        <img src={item.url} alt={item.name} />
    </div>
  );
}
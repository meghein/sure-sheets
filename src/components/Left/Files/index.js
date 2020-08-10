import React, { useState } from 'react';
import CloudinaryWidget from './CloudinaryWidget';
import Tesseract from './Tesseract';
// import Templates from './Templates';
import UploadModal from './UploadModal';

export default function Files(props) {
  const [imageURL, setImageURL] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadTess, setLoadTess] = useState(false)

  const addClipping = (newImport) => {
    const tempClippings = [...props.clippings];
    tempClippings.push(newImport);
    props.setClippings(tempClippings);
    console.log(props.clippings)
  }

  return (
    <div>     
      <UploadModal 
        addClipping={addClipping}
        imageURL={imageURL}
        setImageURL={setImageURL}
        loading={loading}
        setLoading={setLoading}
        setLoadTess={setLoadTess}
        loadTess={loadTess}
      />
    </div>
  )
}

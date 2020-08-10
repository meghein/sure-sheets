import React, { useState } from 'react';
import CloudinaryWidget from './CloudinaryWidget';
import Tesseract from './Tesseract';
// import Templates from './Templates';
import UploadModal from './UploadModal';

export default function Files(props) {
  const [imageURL, setImageURL] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadTess, setLoadTess] = useState(false)
  // we may need this functionality soon:
  // const [showTemplates, setShowTemplates] = useState(false)

  return (
    <div>     
      <UploadModal 
        addClipping={props.addClipping}
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

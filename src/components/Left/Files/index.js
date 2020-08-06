import React, { useState } from 'react';
import CloudinaryWidget from './CloudinaryWidget';
import Tesseract from './Tesseract';
import Templates from './Templates'

export default function Files(props) {
  const [imageURL, setImageURL] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadTess, setLoadTess] = useState(false)
  const [showTemplates, setShowTemplates] = useState(false)

  return (
    <div>
      <CloudinaryWidget 
        addClipping={props.addClipping}
        imageURL={imageURL}
        setImageURL={setImageURL}
        loading={loading}
        setLoading={setLoading}
        setLoadTess={setLoadTess}
      />
      <Templates />
      {loadTess && 
      <Tesseract
        imageURL={imageURL}
        addClipping={props.addClipping}
      />}
    </div>
  )
}

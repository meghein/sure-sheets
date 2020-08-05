import React from 'react';
import CloudinaryWidget from './Cloudinary Widget/CloudinaryWidget';

export default function Files(props) {
  return (
    <div>
      <CloudinaryWidget 
        newImport={props.newImport}
        setNewImport={props.setNewImport}
        addClipping={props.addClipping}
      />
    </div>
  )
}

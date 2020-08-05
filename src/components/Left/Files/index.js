import React from 'react';
import CloudinaryWidget from './Cloudinary Widget/CloudinaryWidget';

export default function Files(props) {
  return (
    <div>
      <CloudinaryWidget 
        clippings={props.clippings}
        setClippings={props.setClippings}
      />
    </div>
  )
}

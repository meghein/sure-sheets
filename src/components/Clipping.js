import React from 'react'

export default function Clipping(props) {
  return (
      <div>
        <img
          alt="clipping"
          // hardcode as index 0, we'll need to change this once we start using other clippings
          src= {props.imagesData[0].image.src}
          onDragStart={props.onDragStart}
        />
        <div
          onDrop={props.onDrop}
          onDragOver={props.onDragOver}
        />
      </div>
  )
};

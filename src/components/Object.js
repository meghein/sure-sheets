import React from 'react'

export default function Object(props) {
  console.log("object props", props);
  return (
      <div>
        <img
          alt="NERv05"
          src= {props.imgData[0].image.src}
          draggable="true"
          onDragStart={props.onDragStart}
        />
        <div
          onDrop={props.onDrop}
          onDragOver={props.onDragOver}
        />
      </div>
  )
};

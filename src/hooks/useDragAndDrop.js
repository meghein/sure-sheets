import { useState, useRef } from 'react';

export default function useDragAndDrop() {
  const dragUrl = useRef();
  const stageRef = useRef();

  const newImage = new window.Image()
  newImage.src = "/images/NERv05SMALLColor.png" // => eventually this will be a clipping url

  const [images, setImages] = useState([{image: newImage}]); // => this will be set to an empty array

  function onDragStart(e) {
    dragUrl.current = e.target.src;
  }
  
  function onDragOver(e) {
    e.preventDefault()
  }
  
  function onDrop(e) {
    // register event position
    stageRef.current.setPointersPositions(e);
    // add image
    setImages(
      images.concat([
        {
          ...stageRef.current.getPointerPosition(),
          src: dragUrl.current
        }
      ])
      );
  }

  return {
    stageRef,
    images,
    onDragStart,
    onDragOver,
    onDrop,
  }
}


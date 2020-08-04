import React, { useState, useRef } from 'react';
// import { Image } from 'react-konva';
// import useImage from 'use-image';

import './App.scss';

import NavBar from './NavBar';
// import Splash from './Splash';
import Canvas from './Canvas';
import Left from './Left';
import Right from './Right';

export default function App() {
  const dragUrl = useRef();
  const stageRef = useRef();
  const newImage = new window.Image()
  newImage.src = "/images/NERv05SMALLColor.png"
  const [images, setImages] = useState([{image: newImage}]);
  // const [img, setImg] = useState("/images/NERv05SMALLColor.png")


  function onDragStart(e) {
    console.log("onDragStart", images)
    dragUrl.current = e.target.src;
    console.log("dragUrl.current", dragUrl.current);
  }

  function onDragOver(e) {
    console.log("onDragOver", images)

    e.preventDefault()
  }

  function onDrop(e) {
    // register event position
    console.log("onDrop", images)
    console.log(stageRef.current.setPointersPositions(e));
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
    
    
  return (
    <div className="App">
      <NavBar />
      
      <Left
        // src={src}
        onDragStart={onDragStart}
        onDrop={onDrop}
        stageRef={stageRef}
        onDragOver={onDragOver}
        imgData={images}
      />
      <div className="main">
        {/* <Splash /> */}
        <Canvas
          stageRef={stageRef}
          images={images}
          imgData={images}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onDragOver={onDragOver}
          dragUrl={dragUrl}
          setImages={setImages}
        />
      </div>
      <Right />

    </div>
  )
};
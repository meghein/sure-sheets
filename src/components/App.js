import React from 'react';
import './App.scss';
import useDragandDrop from '../hooks/useDragAndDrop';

import NavBar from './Home/NavBar';
// import Splash from './Home/Splash';
import Canvas from './Canvas/Canvas';
import Left from './Left/Left';
import Right from './Right/Right';

export default function App() {
  const {
    stageRef,
    images,
    onDragStart,
    onDragOver,
    onDrop,
  } = useDragandDrop();

  return (
    <div className="App">
      <NavBar />
      
      <div className="main">
        <Left
          imagesData={images}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onDragOver={onDragOver}
        />
        {/* <Splash /> */}
        <Canvas
          stageRef={stageRef}
          imagesData={images}
          onDrop={onDrop}
          onDragOver={onDragOver}
        />
        <Right />
      </div>
    </div>
  )
};
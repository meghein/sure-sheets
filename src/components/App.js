import React from 'react';
import './App.scss';

import NavBar from './NavBar';
// import Splash from './Splash';
import Canvas from './Canvas';
import Left from './Left';
import Right from './Right';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Splash /> */}
      <Left />
      <Canvas />
      <Right />
    </div>
  )
};
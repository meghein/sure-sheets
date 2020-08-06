import React, {useState, useEffect } from 'react';
import './App.scss';

import useDragandDrop from '../hooks/useDragAndDrop';

import NavBar from './Home/NavBar';
// import Splash from './Home/Splash';
import Canvas from './Canvas/Canvas';
import Left from './Left/Left';
import Right from './Right/Right';


// Chatbot feature imports
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import config from './Chatbot/config';
import './Chatbot/Chatbot.scss'
import BotButton from './Chatbot/BotButton'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [clippings, setClippings] = useState([]);
  const [newImport, setNewImport] = useState('');
  const [fontSize, setFontSize] = useState(24);
  const [fill, setFill] = useState('black');
  
  const chatbotToggle = () => {
    console.log(`CHAT TOGGLED ${chatOpen}`)
    chatOpen ? setChatOpen(false) : setChatOpen(true)
  }

  const {
    stageRef,
    images,
    onDragStart,
    onDragOver,
    onDrop,
  } = useDragandDrop();


  function addClipping(newImport) {
    const tempClippings = [...clippings];
    tempClippings.push(newImport);
    setClippings(tempClippings);
    console.log("add clipping")
  }  

  useEffect(() => {
    addClipping(newImport)
  }, [newImport]);
  
  return (
    <div className="App">
      <NavBar />
      {chatOpen ? 
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/> : null
      }
      <BotButton toggle={chatbotToggle}/>
      <div className="main">
        <Left
          imagesData={images}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onDragOver={onDragOver}
          textValue={textValue}
          setTextValue={setTextValue}
          newImport={newImport}
          setNewImport={setNewImport}
          addClipping={addClipping}
        />
        {/* <Splash /> */}
        <Canvas
          stageRef={stageRef}
          imagesData={images}
          onDrop={onDrop}
          onDragOver={onDragOver}
          textValue={textValue}
          fontSize={fontSize}
          fill={fill}
        />
        <Right 
          clippings={clippings}
          addClipping={addClipping}
          textValue={textValue}
          setTextValue={setTextValue}
          fontSize={fontSize}
          setFontSize={setFontSize}
          fill={fill}
          setFill={setFill}
        />
      </div>
    </div>
  )
};
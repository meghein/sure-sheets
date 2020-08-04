// I know this line looks weird, but it's triggering an error when it looks nicer
// Please leave it as is.
import React, {useState} from 'react';
import './App.scss';
import NavBar from './NavBar';
import CloudinaryWidget from './Cloudinary Widget/CloudinaryWidget'

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

  const [chatOpen, setChatOpen] = useState(false)
  
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


  return (
    <>
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
    <div>
      <CloudinaryWidget />
    </div>
    </>
  )
};
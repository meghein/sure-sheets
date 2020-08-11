import React, {useState, useEffect } from 'react';
import './App.scss';


import useDragandDrop from '../hooks/useDragAndDrop';
import useStageLoader from '../hooks/useStageLoader'

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
  const [clippings, setClippings] = useState(['This is a test text that is a bit longer for testing purposes']);
  const [newImport, setNewImport] = useState('');

  const [canvasItems, setCanvasItems] = useState([]); // leave this one

  const [currentStage, setCurrentStage] = useState([]);

  const [authenticated, setAuthenticated] = useState(false)

  const [currentUser, setCurrentUser] = useState("");

  const chatbotToggle = () => {
    console.log(`CHAT TOGGLED ${chatOpen}`)
    chatOpen ? setChatOpen(false) : setChatOpen(true)
  }

  const {
    stageRef,
    onDragStart,
    onDragOver,
    onDrop,
  } = useDragandDrop(canvasItems, setCanvasItems);

  const {
    loadTemplate,
    addImage,
    addText,
  } = useStageLoader(canvasItems, setCanvasItems)

  useEffect(() => {
    const tempClippings = [...clippings];
    tempClippings.push(newImport);
    setClippings(tempClippings);
  }, [newImport]);

  
  return (
    <div className="App">
      <NavBar 
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      {chatOpen ? 
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/> : null
      }
      <BotButton toggle={chatbotToggle}/>
      <div className="main">
        <Left
          newImport={newImport}
          setNewImport={setNewImport}
          clippings={clippings}
          loadTemplate={loadTemplate}
          setCurrentStage={setCurrentStage}
          setClippings={setClippings}
        />
        {/* <Splash /> */}
        <Canvas
          stageRef={stageRef}
          onDrop={onDrop}
          onDragOver={onDragOver}
          currentStage={currentStage}
          setCurrentStage={setCurrentStage}
          loadTemplate={loadTemplate}
          addImage={addImage}
          canvasItems={canvasItems}
          setCanvasItems={setCanvasItems}
        />
        <Right 
          clippings={clippings}
          addImage={addImage}
          addText={addText}
          onDragStart={onDragStart}
        />
      </div>
    </div>
  )
};
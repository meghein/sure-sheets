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
  const [textValue, setTextValue] = useState('');
  const [clippings, setClippings] = useState(['This is a test text that is a bit longer for testing purposes']);
  const [newImport, setNewImport] = useState('');
  const [selected, setSelected] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [fill, setFill] = useState('black');

  const [textboxState, setTextboxState] = useState(false)

  const [canvasItems, setCanvasItems] = useState([]); // leave this one

  const [currentStage, setCurrentStage] = useState(['Intro']);

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


  function addClipping(newImport) {
    const tempClippings = [...clippings];
    tempClippings.push(newImport);
    setClippings(tempClippings);
  }

  useEffect(() => {
    addClipping(newImport)
  }, [newImport]);

  useEffect(() => {
    setTextValue(selected)
  }, [selected]);
  
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
          addClipping={addClipping}
          loadTemplate={loadTemplate}
          setCurrentStage={setCurrentStage}
        />
        {/* <Splash /> */}
        <Canvas
          stageRef={stageRef}
          onDrop={onDrop}
          onDragOver={onDragOver}
          textValue={textValue}
          fontSize={fontSize}
          fill={fill}
          // selected={selected}
          currentStage={currentStage}
          loadTemplate={loadTemplate}
          addImage={addImage}
          // addText={addText}
          // handleUndo={handleUndo}
          canvasItems={canvasItems}
          setCanvasItems={setCanvasItems}

          setTextboxState={setTextboxState}
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
          selected={selected}
          setSelected={setSelected}
          addImage={addImage}
          addText={addText}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onDragOver={onDragOver}
          textboxState={textboxState}
          setTextboxState={setTextboxState}
          canvasItems={canvasItems}
          setCanvasItems={setCanvasItems}
          // handleUndo={handleUndo}
        />
      </div>
    </div>
  )
};
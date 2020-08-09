import React, {useState, useEffect } from 'react';
import './App.scss';

import Konva from 'konva'

import useDragandDrop from '../hooks/useDragAndDrop';
import stageLoader from '../helpers/stageLoader'

import NavBar from './Home/NavBar';
// import Splash from './Home/Splash';
import Canvas from './Canvas/Canvas';
import Left from './Left/Left';
import Right from './Right/Right';


// import Konva from 'konva';
// import NewText from './Right/NewText';


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

  const [clippingHistory, setClippingHistory] = useState([]);

  const [currentStage, setCurrentStage] = useState([]);

  const [authenticated, setAuthenticated] = useState(false)

  const [currentStage, setCurrentStage] = useState('');

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

  const {
    loadTemplate,
    addImage,
    addText,
    handleUndo,
  } = stageLoader(clippingHistory, setClippingHistory, currentStage, setCurrentStage)


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
      />
      {chatOpen ? 
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/> : null
      }
      <BotButton toggle={chatbotToggle}/>
      <div className="main">
        <Left
          // imagesData={images}
          // onDragStart={onDragStart}
          // onDrop={onDrop}
          // onDragOver={onDragOver}
          textValue={textValue}
          setTextValue={setTextValue}
          newImport={newImport}
          setNewImport={setNewImport}
          addClipping={addClipping}
          loadTemplate={loadTemplate}
          setCurrentStage={setCurrentStage}
        />
        {/* <Splash /> */}
        <Canvas
          // stageRef={stageRef}
          // imagesData={images}
          // onDrop={onDrop}
          // onDragOver={onDragOver}
          textValue={textValue}
          fontSize={fontSize}
          fill={fill}
          // selected={selected}
          currentStage={currentStage}
          loadTemplate={loadTemplate}
          addImage={addImage}
          // addText={addText}
          // handleUndo={handleUndo}
          clippingHistory={clippingHistory}
          setClippingHistory={setClippingHistory}
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
          // handleUndo={handleUndo}
        />
      </div>
    </div>
  )
};
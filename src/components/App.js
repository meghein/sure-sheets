import React from 'react';
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar';


// Chatbot feature imports
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import config from './Chatbot/config';
// import NERv05BotAvatar from './Chatbot/NERv05BotAvatar';

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
    </div>
  )
};
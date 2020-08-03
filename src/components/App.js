// I know this line looks weird, but it's triggering an error when it looks nicer
// Please leave it as is.
import React,{useState} from 'react';
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar';


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

  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <Chatbot style={{display: "none"}}config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
      <BotButton toggle={chatbotToggle}/>
    </div>
  )
};
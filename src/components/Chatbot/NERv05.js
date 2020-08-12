import React, { useState } from 'react'
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import './Chatbot.scss'
import BotButton from './BotButton'

export default function NERv05() {
  const [chatOpen, setChatOpen] = useState(false);

  const chatbotToggle = () => {
    console.log(`CHAT TOGGLED ${chatOpen}`)
    chatOpen ? setChatOpen(false) : setChatOpen(true)
  }
  
  return (
    <div>
      {chatOpen ? 
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/> : null
      }
      <BotButton toggle={chatbotToggle}/>
    </div>
  )
}

import React, { useState } from 'react'
import './Splash.scss'
import LoginRegisterModal from './LoginRegisterModal'

export default function Splash(props) {
  const [openLogin, setOpenLogin] = useState(false)

  const [open, setOpen] = useState(false);
    const handleClickLoginOpen = () => {
    setOpenLogin(true)
    setOpen(true);
  };
    const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    props.setAuthenticated(false);
  };

  return (
    <div className="splash">
      <h1>- Sure  Sheets- </h1>
      <h2 className="NERv05-script"> Hi! I'm a NERv05 - at your service! Click me to get started. </h2>
      <img src='images/NERv05TheNervousRobot.png' alt="Welcome! I'm NERv05 - at your service" onClick={handleClickLoginOpen}/>
      <h3>In this modern, virus-ridden, age, many of us are learning using the internet, via Zoom, online textbooks, or any other number of learning tools. A common strategy for keeping track of knowledge that comes at you too quickly is to take a screenshot, but how many of us ever come back to those fact-stuffed-screencaps? Enter SureSheets. Using Tesseract OCR, KonvaJS, Cloudinary, and a number of other neat-o open-source products, SureSheets allows its users to capture language from any image and reorganize it into a beautiful, infographic style cheatsheet for use in studying, referencing, or just decorating your house/phone screen/desktop background with 100% pure learning. If you have any questions about the product, feel free to ask NERv05, our chatbot--he can put you on the right track. </h3>
      {openLogin && <LoginRegisterModal mr="auto" className="login" setAuthenticated={props.setAuthenticated} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} open={open} handleClose={handleClose} handleClickLoginOpen={handleClickLoginOpen} />}
    </div>
  )
}

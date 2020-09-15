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

  return (
    <div className="splash">
      <h1> S u r e  S h e e t s </h1>
      <h2 className="NERv05-script"> Hi! I'm NERv05 — at your service! Click me to get started. </h2>
      <img
        src='images/NERv05TheNervousRobot75size.png'
        alt="Welcome! I'm NERv05 - at your service"
        onClick={handleClickLoginOpen}
      />
      <h3 className="topH3">There's more to learning than just taking screenshots.</h3>
      <h3>We'll help you show your sheet. </h3>
      
      {openLogin && (
        <LoginRegisterModal
          mr="auto"
          className="login"
          setAuthenticated={props.setAuthenticated}
          setCurrentUser={props.setCurrentUser}
          currentUser={props.currentUser}
          open={open}
          handleClose={handleClose}
          handleClickLoginOpen={handleClickLoginOpen}
          setInitialLoad={props.setInitialLoad}
        />)}
      <h5>Oh, you're a curious one. Was a waving robot not enough to capture your attention? He's beckoning you. I mean, he is assuming that you haven't let him say his piece a hundred times.</h5>
    </div>
  )
}

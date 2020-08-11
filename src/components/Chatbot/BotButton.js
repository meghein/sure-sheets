import React from 'react';



function BotButton(props) {

  return (
    <div className="BotButton" onClick={props.toggle}>
      <img src="/images/NERv05HalfSizeColor.png" alt="It appears to be a very nervous robot, but you can ask him questions if you need to."></img>
    </div>
  );
}

export default BotButton;


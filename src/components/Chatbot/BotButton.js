import React from 'react';

export default function BotButton(props) {
  return (
    <div className="BotButton" onClick={props.toggle}>
      <img src="/images/NERv05SMALL.png" alt="It appears to be a very nervous robot, but you can ask him questions if you need to."></img>
    </div>
  );
}


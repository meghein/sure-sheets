import React, { useState } from 'react'
import './Right.scss'

import Imports from './Imports'
import Textbox from './Textbox';

export default function Right(props) {
  const [textValue, setTextValue] = useState('')

  return (
    <div className="right">
      
      <Textbox
        textValue={textValue}
        setTextValue={setTextValue}
        addText={props.addText}
      />
        
      <Imports 
        clippings={props.clippings}
        addImage={props.addImage}
        addText={props.addText}
        setTextValue={setTextValue}
        onDragStart={props.onDragStart}
      />
    </div>
  )
}

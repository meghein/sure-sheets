import React from 'react'
import './Right.scss'

import Imports from './Imports'
import Modal from '../Modal'
import Textbox from './Textbox';

/*
<div>
  <button onClick={loadTemplate}>template</button>
  <button onClick={addImage}>image</button>
  <button onClick={addText}>text</button>
  <button onClick={handleUndo}>undo</button>
</div>

*/ 

export default function Right(props) {

  return (
    <div className="right">
      
      <Textbox
        textValue={props.textValue}
        setTextValue={props.setTextValue}
        fontSize={props.fontSize}
        fill={props.fill}
        setFontSize={props.setFontSize}
        setFill={props.setFill}
      />
        
      <Imports 
        clippings = {props.clippings}
        setSelected={props.setSelected}
        addImage={props.addImage}
        addText={props.addText}

        onDragStart={props.onDragStart}
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}
      />
    </div>
  )
}

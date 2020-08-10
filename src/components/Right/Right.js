import React from 'react'
import './Right.scss'

import Imports from './Imports'
import Textbox from './Textbox';
import SaveToPDF from './SaveToPDF'


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
        textboxState={props.textboxState}
        setTextboxState={props.setTextboxState}
        addText={props.addText}
      />
        
      <Imports 
        clippings = {props.clippings}
        setSelected={props.setSelected}
        addImage={props.addImage}
        addText={props.addText}
        textValue={props.textValue}
        setTextValue={props.setTextValue}

        onDragStart={props.onDragStart}
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}
      />

      <SaveToPDF/>
    </div>
  )
}

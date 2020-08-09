import React from 'react'
import './Right.scss'

import Imports from './Imports'
import Modal from '../Modal'
import Textbox from './Textbox';
import { Button } from '@material-ui/core';
import SaveToPDF from './SaveToPDF'


export default function Right(props) {

  function pdf() {
    return <SaveToPDF />
  }

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
    <Button onClick={pdf}>Publish</Button>
    </div>
  )
}

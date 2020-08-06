import React from 'react'
import './Right.scss'

import Imports from './Imports'
import Modal from '../Modal'
import Textbox from './Textbox';

export default function Right(props) {
  return (
    <div className="right">
      <Modal
        buttonName="Add your own Text!"
        body={
          <Textbox
            textValue={props.textValue}
            setTextValue={props.setTextValue}
            fontSize={props.fontSize}
            fill={props.fill}
            setFontSize={props.setFontSize}
            setFill={props.setFill}
          />
        }
      />
      <Imports 
        clippings = {props.clippings}
        selected={props.selected}
        setSelected={props.setSelected}
      />
    </div>
  )
}

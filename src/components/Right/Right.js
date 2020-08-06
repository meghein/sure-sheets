import React from 'react'
import './Right.scss'

import Imports from './Imports'
import Modal from '../Modal'
import Textbox from './Textbox';

export default function Right(props) {
  return (
    <div className="right">
      <Modal
        buttonName="Textbox"
        body={
          <Textbox
            textValue={props.textValue}
            setTextValue={props.setTextValue}
          />
        }
      />
      <Imports 
        clippings = {props.clippings}

      />
    </div>
  )
}

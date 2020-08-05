import React from 'react';

import Modal from '../../Modal';
import Textbox from './Textbox';
import Clipping from '../../Clipping';


export default function Toolbar(props) {
  return (
    <div>
      <Modal
        buttonName="Textbox"
        body={
          <Textbox
            textValue={props.textValue}
            setTextValue={props.setTextValue}
          />
        }
      />
      <Modal
        buttonName="NERv05"
        body={
          <Clipping
            imagesData={props.imagesData}
            onDragStart={props.onDragStart}
            onDrop={props.onDrop}
            onDragOver={props.onDragOver}
          />
        }
      />
    </div>  
  )
}

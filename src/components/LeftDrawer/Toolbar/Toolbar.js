import React from 'react';

import Modal from '../../Modal';
import Textbox from './Textbox';
import Object from '../../Object';


export default function Toolbar(props) {
  console.log("toolbar props", props);
  return (
    <div>
      <Modal
        buttonName="Textbox"
        body={<Textbox/>}
      />
      <Modal
        buttonName="NERv05"
        body={
          <Object
          onDragStart={props.onDragStart}
          onDrop={props.onDrop}
          onDragOver={props.onDragOver}
          imgData={props.imgData}
        />
        }
      />
      {/* <Object
          onDragStart={props.onDragStart}
          onDrop={props.onDrop}
          onDragOver={props.onDragOver}
          imgData={props.imgData}
        /> */}
    </div>  
  )
}

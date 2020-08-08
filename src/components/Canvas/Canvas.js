import React from 'react';
import './Canvas.scss';

import {Layer, Stage} from 'react-konva';

import NewText from './NewText'
import NewImage from './NewImage'


export default function Canvas(props) {

 
  return (
    <>
      <div className='canvas' id='canvas' onDrop={props.onDrop}
      onDragOver={props.onDragOver}>
        <Stage height={1100} width={850} ref={props.stageRef}>
          <Layer>
            {props.clippingHistory.map((item, index) => {
              if(item.src) {
                return <NewImage key={`image-${index}`} src={item.src}/>
              }
              if(item.text) {
                return <NewText key={`text-${index}`} text={item.text} fontSize={props.fontSize}
                fill={props.fill}/>
              }
            })}
          </Layer>
        </Stage>
        {/* <button onClick={saveDraft}>save</button> */}
      </div>
    </>
  )
}

import React from 'react';
import './Canvas.scss';
import { Stage, Layer } from 'react-konva';
import UrlImage from "./UrlImage"

export default function Canvas(props) {
  return(
    <div
      className='canvas'
      id='canvas'
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
    >
      <Stage  container='canvas' width={600} height={600} ref={props.stageRef}>
        <Layer>
          {/* <Transformer resizeEnabled>
          <Text x={300} y={300} text="Test" draggable />
          </Transformer> */}
          {props.imagesData.map((image, index) => {
              return <UrlImage key={index} image={image} />;
            })}
        </Layer>
      </Stage> 
    </div>
  )
}
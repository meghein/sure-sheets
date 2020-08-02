import React from 'react';
import './Canvas.scss';
import { Stage, Layer, Text } from 'react-konva';

export default function Canvas(props) {
  return(
    <div className='canvas'>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer width={600} height ={600}>
          <Text x={100} y={100} text="Test" draggable />
        </Layer>
      </Stage>
    </div>
  )
}
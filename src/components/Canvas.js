import React from 'react';
import './Canvas.scss';
import { Stage, Layer, Text } from 'react-konva';

export default function Canvas(props) {
  return(
    <div className='canvas'>
      <div id='canvas'/>
      <Stage container='canvas' width={600} height={600}>
        <Layer>
          <Text x={100} y={100} text="Test" draggable />
        </Layer>
      </Stage>
    </div>
  )
}
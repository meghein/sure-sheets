import React from 'react'
import {Stage, Layer, Rect} from 'react-konva'
import Clippings from '../Clippings'


export default function Template1(props) {

  return (
    <Stage
      width={794}
      height={1123}
      ref={props.stageRef}
      onMouseDown={props.checkDeselect}
      onTouchStart={props.checkDeselect}
    >
      <Layer>
        <Rect
          width={200}
          height={200}
          x={100}
          y={400}
          fill={'red'}
        />
        
        <Clippings
          clippingHistory={props.clippingHistory}
          setClippingHistory={props.setClippingHistory}
          fontSize={props.fontSize}
          fill={props.fill}
          selectId={props.selectedId}
          selectShape={props.selectShape}
          
        />
      </Layer>
    </Stage>
  )
}

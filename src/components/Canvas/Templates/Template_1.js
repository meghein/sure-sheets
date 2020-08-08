import React from 'react'
import {Stage, Layer, Rect, Text} from 'react-konva'
import Clippings from '../Clippings'


export default function Template_1(props) {

  return (
    <Stage
      width={850}
      height={1100}
      ref={props.stageRef}
      onMouseDown={props.checkDeselect}
      onTouchStart={props.checkDeselect}
    >
      <Layer>
        {/* EDIT HERE CHARLIE */}
        <Rect
          width={200}
          height={600}
          x={100}
          y={400}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
          // draggable={true}
        />
        {/* YOU WORKIN' HERE */}
        <Rect
          width={200}
          height={600}
          x={100}
          y={400}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />
        <Rect
          width={200}
          height={600}
          x={100}
          y={400}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />
        <Rect
          width={200}
          height={600}
          x={100}
          y={400}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />
        <Rect
          width={200}
          height={600}
          x={100}
          y={400}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
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

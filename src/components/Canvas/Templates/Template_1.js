import React from 'react'
import {Stage, Layer, Rect} from 'react-konva'
import Clippings from '../Clippings'

export default function Template_2(props) {
  return (
    <Stage
      width={850}
      height={1100}
      ref={props.stageRef}
      onMouseDown={props.checkDeselect}
      onTouchStart={props.checkDeselect}
    >
      <Layer>
        <Rect
          x={30}
          y={35}
          width={200}
          height={100}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={35}
          width={200}
          height={100}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        
        <Rect
          x={275}
          y={35}
          width={300}
          height={100}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={275}
          y={170}
          width={550}
          height={200}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={275}
          y={630}
          width={550}
          height={200}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={170}
          width={200}
          height={200}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={630}
          width={200}
          height={200}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={400}
          width={550}
          height={200}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={860}
          width={550}
          height={200}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={860}
          width={550}
          height={200}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />
        <Rect
          x={620}
          y={400}
          width={200}
          height={200}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={860}
          width={200}
          height={200}
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

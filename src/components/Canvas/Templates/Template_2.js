import React from 'react'
import {Stage, Layer, Rect, Text} from 'react-konva'
import Clippings from '../Clippings'


export default function Template_1(props) {

  const leftCol = 30;
  const rightCol = 620;
  const horizontalCenter = 275;
  const verticalCenter = 550;
  const fullWidth = 800;
  const thirdWidth = 300;
  const thinWidth = 150;
  const fullHeight = 1050;
  const shortHeight = 125;
  const headersHeight = 100;
  const tallHeight = 500;
  const tightToTop = 15;
  const topRowBox = 150;





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
          x={275}
          y={15}
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
          y={175}
          width={300}
          height={500}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
          // draggable={true}
          />

        <Rect
          x={30}
          y={150}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={290}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={430}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={570}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={150}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={290}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={430}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={570}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={710}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={850}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={710}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={850}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={150}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={275}
          y={740}
          width={300}
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
          y={740}
          width={300}
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
          y={990}
          width={135}
          height={100}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={455}
          y={990}
          width={135}
          height={100}
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

import React, { forwardRef } from 'react'
import {Stage, Layer, Rect} from 'react-konva'
import Clippings from '../Clippings'

export default forwardRef(function Initial(props, stageRef) {
  return (
    <Stage
      container='canvas'
      width={850}
      height={1100}
      ref={stageRef}
      onMouseDown={props.checkDeselect}
      onTouchStart={props.checkDeselect}
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
    >
      <Layer>
      <Rect
          x={25}
          y={35}
          width={800}
          height={80}
          {...props.shapeProps}
          draggable
        />
        <Rect
          x={25}
          y={135}
          width={385}
          height={150}
          {...props.shapeProps}
          draggable
        />
        <Rect
          x={440}
          y={135}
          width={385}
          height={150}
          {...props.shapeProps}
        />
        <Rect
          x={75}
          y={315}
          width={700}
          height={400}
          {...props.shapeProps}
        />
        <Rect
          x={25}
          y={745}
          width={800}
          height={330}
          {...props.shapeProps}
          draggable
        />
        <Clippings
          canvasItems={props.canvasItems}
          setCanvasItems={props.setCanvasItems}
          targetShape={props.targetShape}
          setTargetShape={props.setTargetShape} 
        />
      </Layer>
    </Stage>
  )
})

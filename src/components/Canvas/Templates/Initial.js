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
          x={30}
          y={35}
          width={200}
          height={100}
          {...props.shapeProps}
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

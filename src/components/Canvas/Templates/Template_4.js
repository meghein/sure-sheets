import React, { forwardRef } from 'react'
import {Stage, Layer, Rect} from 'react-konva'
import Clippings from '../Clippings'
// import Konva from 'konva'


export default forwardRef(function Template1(props, stageRef) {

  function stageref(e) {
    console.log("this is where I'm clicking:", stageRef.current.getPointersPositions(e))
  }


  return (
    <Stage
      width={794}
      height={1123}
      ref={stageRef}
      onMouseDown={props.checkDeselect}
      onTouchStart={props.checkDeselect}
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
      onClick={stageref}
    >
      <Layer>
        <Rect
          width={200}
          height={200}
          x={100}
          y={400}
          fill={'red'}
          // ref={stage}
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
})

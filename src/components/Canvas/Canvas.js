import React, {useState, forwardRef, useEffect} from 'react';
import './Canvas.scss';

import Initial from './Templates/Initial'
import Template1 from './Templates/Template1'
import Template2 from './Templates/Template2'
import Template3 from './Templates/Template3'
import Template4 from './Templates/Template4'

export default forwardRef(function Canvas(props, stageRef) {


  const checkDeselect = e => {
    if (e.target === e.target.getStage() || e.target.hasName("container")) {
      props.setTargetShape(null);
    }
  };

  useEffect(() => {
    props.setCurrentStage('initial')
    console.log("currentstage on load", props.currentStage)
  },[])

  const shapeProps = {
    name: 'container',
    fill: props.boxColour,
    shadowColor: 'gray',
    stroke:'black',
    strokeWidth:4,
    cornerRadius:10,
    // draggable: true,
  }


  return (
    <>
      <div
        className='canvas' 
        id='canvas'
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}
        style={{backgroundColor: props.canvasColour}}

      >
        {props.currentStage === 'initial' &&
           <Initial
            ref={props.stageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            targetShape={props.targetShape}
            setTargetShape={props.setTargetShape}
            onDrop={props.onDrop}
            onDragOver={props.onDragOver}
            fill={props.boxColour}
            shapeProps={shapeProps}
          />
        }
        {(props.currentStage === "Template 1") &&
          <Template1
            ref={props.stageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            targetShape={props.targetShape}
            setTargetShape={props.setTargetShape}
            onDrop={props.onDrop}
            onDragOver={props.onDragOver}
            fill={props.boxColour}
            shapeProps={shapeProps}
          />
        }
        {(props.currentStage === "Template 2") &&
          <Template2
            ref={props.stageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            targetShape={props.targetShape}
            setTargetShape={props.setTargetShape}
            onDrop={props.onDrop}
            onDragOver={props.onDragOver}
            fill={props.boxColour}
            shapeProps={shapeProps}
          />
        }
        {(props.currentStage === "Template 3") &&
          <Template3
            ref={props.stageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            targetShape={props.targetShape}
            setTargetShape={props.setTargetShape}
            onDrop={props.onDrop}
            onDragOver={props.onDragOver}
            fill={props.boxColour}
            shapeProps={shapeProps}
          />
        }
        {(props.currentStage === "Template 4") &&
          <Template4
            ref={props.stageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            targetShape={props.targetShape}
            setTargetShape={props.setTargetShape}
            onDrop={props.onDrop}
            onDragOver={props.onDragOver}
            fill={props.boxColour}
            shapeProps={shapeProps}
          />
        }
      </div>
    </>
  )
})

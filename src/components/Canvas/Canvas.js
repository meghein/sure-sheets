import React, {useState, forwardRef, useEffect} from 'react';
import './Canvas.scss';

import { Stage, Layer, Rect } from 'react-konva'

import Template1 from './Templates/Template_1'
import Template2 from './Templates/Template_2'
import Template3 from './Templates/Template_3'
import Template4 from './Templates/Template_4'
import Clippings from './Clippings'


export default forwardRef(function Canvas(props, stageRef) {
  const [targetShape, setTargetShape] = useState(null);

  const checkDeselect = e => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setTargetShape(null);
    }
  };

  useEffect(() => {
    props.setCurrentStage('initial')
    console.log("currentstage on load", props.currentStage)
  },[])


  return (
    <>
      <div
        className='canvas' 
        id='canvas'
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}

      >
        {props.currentStage === 'initial' &&
           <Stage
              width={850}
              height={1100}
              ref={stageRef}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
              onDrop={props.onDrop}
              onDragOver={props.onDragOver}
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
                  draggable={true}
                />
                <Clippings
                  canvasItems={props.canvasItems}
                  setCanvasItems={props.setCanvasItems}
                  targetShape={targetShape}
                  setTargetShape={setTargetShape} 
                />
              </Layer>
           </Stage>
        }
        {(props.currentStage === "Template 1") &&
          <Template1
            ref={props.stageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            targetShape={targetShape}
            setTargetShape={setTargetShape}
            onDrop={props.onDrop}
            onDragOver={props.onDragOver}
            // setTextboxState={props.setTextboxState}
          />
        }
        {(props.currentStage === "Template 2") &&
          <Template2
          ref={props.stageRef}
          checkDeselect={checkDeselect}
          canvasItems={props.canvasItems}
          setCanvasItems={props.setCanvasItems}
          fontSize={props.fontSize}
          fill={props.fill}
          targetShape={targetShape}
          setTargetShape={setTargetShape}
          onDrop={props.onDrop}
          onDragOver={props.onDragOver}
          />
        }
        {(props.currentStage === "Template 4") &&
          <Template4
            ref={props.stageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            fontSize={props.fontSize}
            fill={props.fill}
            targetShape={targetShape}
            setTargetShape={setTargetShape}
            onDrop={props.onDrop}
            onDragOver={props.onDragOver}
          />
        }
        {(props.currentStage === "Template 3") &&
          <Template3
            ref={props.StageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            fontSize={props.fontSize}
            fill={props.fill}
            targetShape={targetShape}
            setTargetShape={setTargetShape}
          />
        }
      </div>
    </>
  )
})

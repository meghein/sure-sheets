import React, {useState} from 'react';
import './Canvas.scss';

import Template_1 from './Templates/Template_2'
import Template_2 from './Templates/Template_1'
import Template_3 from './Templates/Template_3'

export default function Canvas(props) {
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = e => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  console.log("current stage", props.currentStage)
 
  return (
    <>
      <div
        className='canvas' 
        id='canvas'
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}
      >
        {(props.currentStage === "Template 1") &&
          <Template_1
            ref={props.StageRef}
            checkDeselect={checkDeselect}
            clippingHistory={props.clippingHistory}
            setClippingHistory={props.setClippingHistory}
            fontSize={props.fontSize}
            fill={props.fill}
            selectId={selectedId}
            selectShape={selectShape}
          />
        }

        {/* IF WE CREATE MORE TEMPLATES, ALSO CREATE MORE OF THESE */}
        {(props.currentStage === "Template 2") &&
          <Template_2
          ref={props.StageRef}
          checkDeselect={checkDeselect}
          clippingHistory={props.clippingHistory}
          setClippingHistory={props.setClippingHistory}
          fontSize={props.fontSize}
          fill={props.fill}
          selectId={selectedId}
          selectShape={selectShape}
          />
        }

        {(props.currentStage === "Template 3") &&
          <Template_3
            ref={props.StageRef}
            checkDeselect={checkDeselect}
            clippingHistory={props.clippingHistory}
            setClippingHistory={props.setClippingHistory}
            fontSize={props.fontSize}
            fill={props.fill}
            selectId={selectedId}
            selectShape={selectShape}
          />
        }


        {/* <button onClick={saveDraft}>save</button> */}
      </div>
    </>
  )
}

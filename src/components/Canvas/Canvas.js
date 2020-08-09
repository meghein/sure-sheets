import React, {useState} from 'react';
import './Canvas.scss';

import Template1 from './Templates/Template_1'
import Template2 from './Templates/Template_2'

export default function Canvas(props) {
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = e => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  

 
  return (
    <>

      <div
        className='canvas' 
        id='canvas'
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}
      >
      {/* <button onClick={handlePdf}>publish</button> */}
        {(props.currentStage === "Template 1") &&
          <Template1
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
        {(props.currentStage === "Template 2") &&
          <Template2
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

      </div>
    </>
  )
}

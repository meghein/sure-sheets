import React from 'react';
import './Canvas.scss';
import { Stage, Layer, Text } from 'react-konva';
import UrlImage from "./UrlImage"
// import html2canvas from 'html2canvas'

export default function Canvas(props) {

  function stripHtml(value){
    let tempElement = document.createElement("div");
    tempElement.innerHTML = value;
    return tempElement.textContent || tempElement.innerText || "";
  }

  return(
    <div
      className='canvas'
      id='canvas'
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
    >
      <Stage  container='canvas' width={850} height={1100} ref={props.stageRef}>
        <Layer>
          {props.imagesData.map((image, index) => {
              return <UrlImage key={index} image={image} />;
            })}
          <Text
            text={stripHtml(props.textValue)}
            fontSize={24}
            fill={"red"}
            // fontStyle={styleChooser}
            x={300}
            y={300}
            draggable
          />
        </Layer>
      </Stage> 
    </div>
  )
}
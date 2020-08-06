import React, { useEffect, useState } from 'react';
import './Canvas.scss';
import { Stage, Layer, Text } from 'react-konva';
import UrlImage from "./UrlImage"
// import Konva from 'konva'
// import html2canvas from 'html2canvas'

export default function Canvas(props) {

  function stripHtml(value){
    let tempElement = document.createElement("div");
    tempElement.innerHTML = value;
    return tempElement.textContent || tempElement.innerText || "";
  }

  function selectedText() {
    console.log(props.selected)
    if (props.selected) {
      return <Text
      text={props.selected}
      fontSize={props.fontSize}
      fill={props.fill}
      x={300}
      y={300}
      draggable
    />
    }  
  }
  const [newText, setNewText] = useState('')

  useEffect(() => {
    setNewText(selectedText())
  }, [props.selected]);

  console.log("after use effect", newText)

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
            fontSize={props.fontSize}
            fill={props.fill}
            x={300}
            y={300}
            draggable
          />
          {newText ? newText : null}
        </Layer>
      </Stage> 
    </div>
  )
}
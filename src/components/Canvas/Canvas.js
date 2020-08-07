import React, { useEffect, useState } from 'react';
import './Canvas.scss';
import { Stage, Layer, Text, Image } from 'react-konva';
import Test from './Test'

// import html2canvas from 'html2canvas'

export default function Canvas(props) {

  function stripHtml(value){
    let tempElement = document.createElement("div");
    tempElement.innerHTML = value;
    return tempElement.textContent || tempElement.innerText || "";
  }

  const [newText, setNewText] = useState('')
  const [canvasClippings, setCanvasClippings] = useState([])
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


  // function addCanvasClipping(newText) {
  //   const tempClippings = [...canvasClippings];
  //   tempClippings.push(newText);
  //   setCanvasClippings(tempClippings);
  //   console.log("add canvas clipping")
  // } 

  // useEffect(() => {
  //   setNewText(selectedText())
  // }, [props.selected]);
  
      


  console.log("after use effect", newText)

  return(
    <div>
      <Test />
    <div
      className='canvas'
      id='canvas'
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
    >
            

      <Stage  container='canvas' width={850} height={1100} ref={props.stageRef}>
        <Layer>
          {/* {props.imagesData.map((image, index) => {
              return <UrlImage key={index} image={image} />;
            })} */}
          <Text
            text={stripHtml(props.textValue)}
            fontSize={props.fontSize}
            fill={props.fill}
            width={300}
            x={300}
            y={300}
            draggable
          />
          {/* {props.canvasClippings.filter(typeof(clipping) === "object") && props.canvasClippings.map((image, i) => {
            return (
              <Image
                key={i}
                imageUrl={image.src}
                isSelected={image.id === props.selected}
                onSelect={() => {
                  props.setSelected();
                }}
                onChange={newAttrs => {
                  const imgs = props.canvasClippings.slice();
                  imgs[i] = newAttrs;
                }}
              />
            );
          })} */}
        </Layer>
      </Stage> 
    </div>
    </div>
  )
}
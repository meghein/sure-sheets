import React from 'react'
import { Text } from 'react-konva';

export default function NewText(props) {

  // function stripHtml(value){
  //   let tempElement = document.createElement("div");
  //   tempElement.innerHTML = value;
  //   return tempElement.textContent || tempElement.innerText || "";
  // }

  return (
    < Text
      text={props.text}
      fontSize={props.fontSize}
      fill={props.fill}
      width={300}

      draggable
    />
  )
}
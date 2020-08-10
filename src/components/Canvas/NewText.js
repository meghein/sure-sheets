import React, {useState} from 'react'
import { Text } from 'react-konva';
import useTextSettings from '../../hooks/useTextSettings'

export default function NewText(props) {
  // const [hide, setHide] = useState(false)

  const {
    textboxState,
    setTextboxState,
  } = useTextSettings()

  // function stripHtml(value){
  //   let tempElement = document.createElement("div");
  //   tempElement.innerHTML = value;
  //   return tempElement.textContent || tempElement.innerText || "";
  // }

  function openTextArea(e) {
    // e.target.hide()
    console.log(e.target.fontSize)
    setTextboxState(true)

  }

  return (
    < Text
      text={props.text}
      // fontSize={props.fontSize}
      // fill={props.fill}
      width={300}
      onClick={openTextArea}
      draggable
    />
  )
}
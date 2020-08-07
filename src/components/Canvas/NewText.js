import React, { useState, useEffect } from 'react'
import { Text } from 'react-konva';

export default function NewText(props) {
  const [newText, setNewText] = useState('')
  
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

  useEffect(() => {
    setNewText(selectedText())
  }, [props.selected]);

  console.log("after use effect", newText)
  return (
    <>
    {newText ? newText : null}
    </>
  )
}

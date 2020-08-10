import React from 'react'
import { Text } from 'react-konva';
import useTextSettings from '../../hooks/useTextSettings'

export default function NewText(props) {
  const { setTextboxState } = useTextSettings()

  function openTextArea(e) {
    e.target.hide()
    console.log(e.target.fontSize)
    setTextboxState(true)

  }

  return (
    < Text
      text={props.text}
      fontSize={props.fontSize}
      fill={props.fill}
      fontFamily={props.fontFamily}
      align={props.align}
      width={300}
      onClick={openTextArea}
      draggable
    />
  )
}
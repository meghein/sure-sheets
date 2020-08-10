import { useState } from 'react'

export default function useTextSettings() {
  const [textboxState, setTextboxState] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [colour, setColour] = useState('black')
  const [activeFontFamily, setActiveFontFamily] = useState('Arial')
  const [align, setAlign] = useState('left')

  // change all these states^ in to this?
  const textCustomizeState = {
    textboxState: false,
    fontSize: 16,
    color: 'black',
    activeFontFamily: 'Arial',
    align: 'left',
    fontSizeEl: null,
    alignEl: null,
    pickerVisable: false,
  }


  return{
    textboxState, setTextboxState,
    fontSize, setFontSize,
    colour, setColour,
    activeFontFamily, setActiveFontFamily,
    align, setAlign,
    textCustomizeState
  } 
}

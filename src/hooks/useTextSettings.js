import { useState } from 'react'

export default function useTextSettings() {
  const [textboxState, setTextboxState] = useState(false)
  const [textValue, setTextValue] = useState('')

  const [fontSize, setFontSize] = useState(16)
  const [colour, setColour] = useState('black')
  const [activeFontFamily, setActiveFontFamily] = useState('Arial')
  const [align, setAlign] = useState('left')

  return{
    textboxState, setTextboxState,
    textValue, setTextValue,
    fontSize, setFontSize,
    colour, setColour,
    activeFontFamily, setActiveFontFamily,
    align, setAlign
  }
  
}

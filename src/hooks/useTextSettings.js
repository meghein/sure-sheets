import { useState } from 'react'

export default function useTextSettings() {
  const [textboxState, setTextboxState] = useState(false)
  const [textValue, setTextValue] = useState('')
  
  // const setFont

  return{
    textboxState,
    setTextboxState,
    textValue,
    setTextValue,
  }
  
}

import { useState } from 'react'

export default function useStageColours() {
  const [canvasColour, setCanvasColour] = useState('#E3D7FF')
  const [boxColour, setBoxColour] = useState('white')
  return {
    canvasColour,
    setCanvasColour,
    boxColour,
    setBoxColour,
  }
}

import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { SwatchesPicker } from 'react-color';

import useStageColours from '../../../hooks/useStageColours'

export default function Colours() {
  const [pickerVisable, setpickerVisable] = useState(false)

  const { setCanvasColour, setBoxColour } = useStageColours()

  const handleCanvasChange = ({ hex }) => setCanvasColour(hex)

  const handleBoxChange = ({ hex}) => setBoxColour(hex)

  const onTogglePicker = () => {
    pickerVisable ? setpickerVisable(false) : setpickerVisable(true)
  }

  return (
    <div>
      <Button onClick={ onTogglePicker }>
        Background Colour
      </Button>
      { pickerVisable && (
        <div style={{ position: 'absolute' }}>
          <SwatchesPicker onChangeComplete={ handleCanvasChange }/>
        </div>
      )}
      <Button onClick={ onTogglePicker }>
        Container Colour
      </Button>
      { pickerVisable && (
        <div style={{ position: 'absolute' }}>
          <SwatchesPicker onChangeComplete={ handleBoxChange }/>
        </div>
      )}
    </div>  
  )
}

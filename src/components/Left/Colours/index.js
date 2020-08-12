import React, { useState } from 'react';
import { SwatchesPicker } from 'react-color';
import { Button, Menu, MenuItem, Fade } from '@material-ui/core';


export default function Colours(props) {
  const [canvasEl, setCanvasEl] = useState(null);
  const canvasIsOpen = Boolean(canvasEl);
  const [boxEl, setBoxEl] = useState(null);
  const boxIsOpen = Boolean(boxEl);

  const handleCanvasClick = (e) => {
    setCanvasEl(e.currentTarget);
  };

  const handleCanvasChange = ({ hex }) => {
    setCanvasEl(null)
    props.setCanvasColour(hex)
  }

  const handleBoxClick = (e) => {
    setBoxEl(e.currentTarget);
  };

  const handleBoxChange = ({ hex }) => {
    setBoxEl(null)
    props.setBoxColour(hex)}

  return (
    <div>
      <Button variant="outlined" color="primary" aria-controls="fade-menu" aria-haspopup="true" onClick={ handleCanvasClick }>
        Background Colour
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={canvasEl}
        keepMounted
        open={canvasIsOpen}
        onClose={handleCanvasChange}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={ handleCanvasChange }> <SwatchesPicker onChangeComplete={ handleCanvasChange }/></MenuItem>
      </Menu>
      <Button variant="outlined" color="primary" aria-controls="fade-menu" aria-haspopup="true" onClick={ handleBoxClick }>
        Container Colour
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={boxEl}
        keepMounted
        open={boxIsOpen}
        onClose={handleBoxChange}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={ handleBoxChange }> <SwatchesPicker onChangeComplete={ handleBoxChange }/></MenuItem>
      </Menu>
    </div>  
  )
}

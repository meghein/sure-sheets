import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { SwatchesPicker } from 'react-color';
import './Right.scss'



import 'react-quill/dist/quill.bubble.css';


export default function Textbox(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pickerVisable, setpickerVisable] = useState(false)
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null)
    if(e.currentTarget.dataset.id === "font-title") {
      props.setFontSize(36)
    }
    if(e.currentTarget.dataset.id === "font-heading") {
      props.setFontSize(28)
    }
    if(e.currentTarget.dataset.id === "font-subheading") {
      props.setFontSize(22)
    }
    if(e.currentTarget.dataset.id === "font-body") {
      props.setFontSize(16)
    }
    
  }

  const handleColorChange = ({ hex }) => props.setFill(hex)
  const onTogglePicker = () => {
    pickerVisable ? setpickerVisable(false) : setpickerVisable(true)
  }

  return (
    <div>
      <ReactQuill
        id="quill"
        theme="bubble"
        value={props.textValue}
        onChange={props.setTextValue}
      />
      <div>
        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          Font Size
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose} data-id="font-title">Title</MenuItem>
          <MenuItem onClick={handleClose} data-id="font-heading">Heading</MenuItem>
          <MenuItem onClick={handleClose} data-id="font-subheading">Subheading</MenuItem>
          <MenuItem onClick={handleClose} data-id="font-body">Body</MenuItem>
        </Menu>
        <div>
        <Button onClick={ onTogglePicker }>
          Font Colour
        </Button>

        { pickerVisable && (
          <div style={{ position: 'absolute' }}>
            <SwatchesPicker
              onChangeComplete={ handleColorChange }
            />
          </div>
        ) }
      </div>

      </div>

    </div>
  )
}
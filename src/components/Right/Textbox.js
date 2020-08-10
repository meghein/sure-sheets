import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { SwatchesPicker } from 'react-color';
import FontPicker from "font-picker-react";
import './Right.scss'
import useTextSettings from '../../hooks/useTextSettings'
// import useStageLoader from '../../hooks/useStageLoader'

import 'react-quill/dist/quill.bubble.css';


export default function Textbox(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pickerVisable, setpickerVisable] = useState(false)
  const isOpen = Boolean(anchorEl);

  const {
    textboxState, setTextboxState,
    textValue, setTextValue,
    fontSize, setFontSize,
    colour, setColour,
    activeFontFamily, setActiveFontFamily,
    align, setAlign
  } = useTextSettings()

  useEffect(() => {
    if(props.textValue) {
      setTextboxState(true)
    }
  }, [props.textValue])

  const toggleOpen = () => {
    textboxState ? setTextboxState(false) : setTextboxState(true)
  }

  const close = () => {
    setTextboxState(false)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null)
    if(event.currentTarget.dataset.id === "font-title") {
      setFontSize(36)
    }
    if(event.currentTarget.dataset.id === "font-heading") {
      setFontSize(28)
    }
    if(event.currentTarget.dataset.id === "font-subheading") {
      setFontSize(22)
    }
    if(event.currentTarget.dataset.id === "font-body") {
      setFontSize(16)
    }
  }

  const handleColorChange = ({ hex }) => setColour(hex)
  const onTogglePicker = () => {
    pickerVisable ? setpickerVisable(false) : setpickerVisable(true)
  }

  const saveText = (e) => {
    console.log(e.target.value, fontSize, colour, activeFontFamily, align)
    props.addText(e.target.value, fontSize, colour, activeFontFamily, align)
    setTextboxState(false)
    props.setTextValue('')
  }

  const handleTextChange = (e) => {
    props.setTextValue(e.target.value)
  }

  const changeFont = (e) => {
    // console.log(e.family)
    setActiveFontFamily(e.family)
  }



  // const 

  return (      
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleOpen}
      >
        Edit or Add Text
      </Button>
        {textboxState && (
      <div className="text-container">
          <div className="modal" id="modal">
            <IconButton aria-label="delete" className="close">
              <CloseIcon fontSize="large" onClick={close}/>
            </IconButton>
            <textarea className='textbox apply-font' fontFamily={activeFontFamily} value={props.textValue} onChange={handleTextChange}/>
            <button value={props.textValue} onClick={saveText}>save text</button>
        {/* <Button onClick={saveText} dataset-id={props.textValue}>Click to save</Button> */}
        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          Font Size
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={isOpen}
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
        <FontPicker
          apiKey="AIzaSyAJpDBzWJ44P71AnWYpqQYahsZCjY8-5MQ"
          activeFontFamily={activeFontFamily}
          onChange={changeFont}
      />
      </div>

      </div>          
        </div>
        )}
    </div>  
  );

}
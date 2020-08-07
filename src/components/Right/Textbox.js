import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { SwatchesPicker } from 'react-color';
import './Right.scss'



import 'react-quill/dist/quill.bubble.css';


export default function Textbox(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pickerVisable, setpickerVisable] = useState(false)
  const [open, setOpen] = useState(false);
  const isOpen = Boolean(anchorEl);

  useEffect(() => {
    if(props.textValue) {
      setOpen(true)
    }
  }, [props.textValue])

  const toggleOpen = () => {
    open ? setOpen(false) : setOpen(true)
  }

  const close = () => {
    setOpen(false)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null)
    if(event.currentTarget.dataset.id === "font-title") {
      props.setFontSize(36)
    }
    if(event.currentTarget.dataset.id === "font-heading") {
      props.setFontSize(28)
    }
    if(event.currentTarget.dataset.id === "font-subheading") {
      props.setFontSize(22)
    }
    if(event.currentTarget.dataset.id === "font-body") {
      props.setFontSize(16)
    }
    
  }

  const handleColorChange = ({ hex }) => props.setFill(hex)
  const onTogglePicker = () => {
    pickerVisable ? setpickerVisable(false) : setpickerVisable(true)
  }

  const saveText = (event) => {

  }

  return (      
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleOpen}
      >
        Edit or Add Text
      </Button>
        {open && (
          <div className="modal" id="modal">
            <IconButton aria-label="delete" className="close">
              <CloseIcon fontSize="large" onClick={close}/>
            </IconButton>
            <div>
      <ReactQuill
        id="quill"
        theme="bubble"
        value={props.textValue}
        onChange={props.setTextValue}
      />
      <div>
        <Button onClick={saveText}>Click to save</Button>
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
      </div>

      </div>

    </div>
          </div>
          
        )}
        
    </div>  
  );

}
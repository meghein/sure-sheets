import React, { useState, useEffect } from 'react';
import { Button, IconButton, Menu, MenuItem, Fade } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { SwatchesPicker } from 'react-color';
import FontPicker from "font-picker-react";
import './Right.scss'
import useTextSettings from '../../hooks/useTextSettings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont, faAlignLeft, faTextHeight, faPalette } from '@fortawesome/free-solid-svg-icons'


export default function Textbox(props) {
  const [fontSizeEl, setFontSizeEl] = useState(null);
  const [alignEl, setAlignEl] = useState(null);
  const [pickerVisable, setpickerVisable] = useState(false)
  const sizeIsOpen = Boolean(fontSizeEl);
  const alignIsOpen = Boolean(alignEl)

  const {
    textboxState, setTextboxState,
    fontSize, setFontSize,
    colour, setColour,
    activeFontFamily, setActiveFontFamily,
    align, setAlign
  } = useTextSettings()

  useEffect(() => {
    if(props.textValue) {
      setTextboxState(true)
      console.log(props.textValue)
    }
  }, [props.textValue])

  const toggleOpen = () => {
    textboxState ? setTextboxState(false) : setTextboxState(true)
  }

  const close = () => {
    setTextboxState(false)
  }

  const handleSizeClick = (event) => {
    setFontSizeEl(event.currentTarget);
  };

  const fontSizes =['Title', 'Heading', 'Subheading', 'Body']
  
  const handleFontSize = (event) => {
    setFontSizeEl(null)
    const sizes = {Title: 32, Heading: 26, Subheading: 20, Body: 14}

    for (const size in sizes) {
      if(event.currentTarget.dataset.id === size) {
        setFontSize(sizes[size])
      }
    }
  }

  const handleAlignClick = (event) => {
    setAlignEl(event.currentTarget);
  };

  const textAlign =['left', 'center', 'right']
  
  const handleTextAlign = (event) => {
    setAlignEl(null)
    setAlign(event.currentTarget.dataset.id)
  }

  const handleColorChange = ({ hex }) => setColour(hex)
  const onTogglePicker = () => {
    pickerVisable ? setpickerVisable(false) : setpickerVisable(true)
  }

  const handleFontFamily = (e) => {
    setActiveFontFamily(e.family)
  }

  const handleTextChange = (e) => {
    props.setTextValue(e.target.value)
  }

  const saveText = (e) => {
    props.addText(e.target.value, fontSize, colour, activeFontFamily, align)
    console.log(e.target.dataset.id)
    setTextboxState(false)
    props.setTextValue('')
    // props.setTextValue('')
  }


  return (      
    <div>
      <Button variant="outlined"
        color="primary"
        onClick={toggleOpen}
      >
        Edit or Add Text
      </Button>
        {textboxState && (
        <div className="text-container">
          <div className="modal" id="modal">
            <IconButton className="delete-button" aria-label="delete" className="close">
              <CloseIcon fontSize="large" onClick={close}/>
            </IconButton>
            <textarea
              className='textbox apply-font'
              fontFamily={activeFontFamily}
              style={{fontSize: fontSize, color: colour, textAlign: align}}
              value={props.textValue}
              onChange={handleTextChange}
            />
          <div className="custom-buttons">
          <FontPicker
            className='font-picker'
            apiKey="AIzaSyAJpDBzWJ44P71AnWYpqQYahsZCjY8-5MQ"
            activeFontFamily={activeFontFamily}
            onChange={handleFontFamily}
          />
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleSizeClick}>
            <FontAwesomeIcon icon={faTextHeight}/>
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={fontSizeEl}
            keepMounted
            open={sizeIsOpen}
            onClose={handleFontSize}
            TransitionComponent={Fade}
          >
          {fontSizes.map((name) => {
            return <MenuItem onClick={handleFontSize} data-id={name}>{name}</MenuItem>
          })}
          </Menu>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleAlignClick}>
            <FontAwesomeIcon icon={faAlignLeft} />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={alignEl}
            keepMounted
            open={alignIsOpen}
            onClose={handleTextAlign}
            TransitionComponent={Fade}
          >
          {textAlign.map((name) => {
            return <MenuItem onClick={handleTextAlign} data-id={name}>{name}</MenuItem>
          })}
          </Menu>
          <div>
          <Button onClick={ onTogglePicker }>
            <FontAwesomeIcon icon={faPalette} />
          </Button>
          { pickerVisable && (
            <div style={{ position: 'absolute' }}>
              <SwatchesPicker onChangeComplete={ handleColorChange }/>
            </div>
          )}
          </div>
          <button value={props.textValue} onClick={saveText}>Save Text</button>
        </div>          
        </div>          
      </div>
      )}
    </div>  
  );

}
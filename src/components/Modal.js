import React, { useState } from 'react';
import { Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './Modal.scss'

export default function Modal(props) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    open ? setOpen(false) : setOpen(true)
  }

  const close = () => {
    setOpen(false)
  }

  return (      
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleOpen}
      >
        {props.buttonName}
      </Button>
        {open && (
          <div className="modal" id="modal">
            <IconButton aria-label="delete" className="close">
              <CloseIcon fontSize="large" onClick={close}/>
            </IconButton>
            {props.body}
          </div>
          
        )}
        
    </div>  
  );
}
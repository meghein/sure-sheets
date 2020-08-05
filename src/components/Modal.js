import React, { useState } from 'react';
import { Button } from '@material-ui/core';

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
            {props.body}
            <Button
              variant="contained"
              color="primary"
              onClick={close}
            >
              Close
            </Button>
          </div>
          
        )}
        
    </div>  
  );
}
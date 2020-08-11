import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const templates = ['Template 1', 'Template 2', 'Template 3', 'Template 4']

export default function Templates(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null)
    console.log("dataset", e.currentTarget.dataset.id);
    props.setCurrentStage(e.currentTarget.dataset.id)
  }

  return (
      <div>
        <Button variant="outlined" color="primary" aria-controls="MuiButton-label" aria-haspopup="true" onClick={handleClick}>
          Choose a template
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {templates.map((template, index) => (
          <MenuItem onClick={handleClose} key={index + 1} id={`template_${index + 1}`} data-id={template}> Template {index + 1}</MenuItem>
          ))}
        </Menu>
      </div>
  );
}

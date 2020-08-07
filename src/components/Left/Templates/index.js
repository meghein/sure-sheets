import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
// import tileData from './tileData';

const templates = [
        { "attrs":{"width":850,"height":1100},
          "className":"Stage",
          "children":[{"attrs":{},
                        "className":"Layer",
                        "children":[{
                          "attrs":{"x":100,"y":100,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},
                          "className":"RegularPolygon"}, {
                            "attrs":{"x":200,"y":200,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},
                            "className":"RegularPolygon"}]},]
        },
        
        {"attrs":{"width":850,"height":1100},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":200,"y":100,"sides":6,"radius":70,"fill":"white","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]},
        
        {"attrs":{"width":850,"height":1100},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":200,"sides":6,"radius":70,"fill":"green","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]},
      ]



export default function Templates(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null)
    props.setCurrentStage(templates[e.currentTarget.dataset.id])
  }

  return (
      <div>
        <Button variant="contained" color="primary" aria-controls="MuiButton-label" aria-haspopup="true" onClick={handleClick}>
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
          <MenuItem onClick={handleClose} id={`template_${index + 1}`} data-id={index}> Template {index + 1}</MenuItem>
          ))}
        </Menu>
      </div>
  );
}

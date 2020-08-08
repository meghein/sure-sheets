import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
// import tileData from './tileData';



let leftCol = 30;
let rightCol = 620;
let horizontalCenter = 275; 
let verticalCenter = 550;
let fullWidth = 800;
let thirdWidth = 300;
let thinWidth = 150;
let fullHeight = 1050;
let shortHeight = 125; 
let headersHeight = 100;
let tallHeight = 500;
let tightToTop = 15;
let topRowBox = 150;



const templates = [
        { "attrs":{"width":850,"height":1100, "blockSnapSize":30, "tween": null},
          "className":"Stage",
          "children":[{"attrs":{}, "className":"Layer", "children":[
            
            // Top Left
            
            {"attrs": { 
              "x": 30, 
              "y": tightToTop, 
              "sides": 4, 
              "width": 200 ,
              "height": 100,
              "shadowBlur": 10,
              "cornerRadius": 10,
              "fill": "white", 
              "shadowColor": "gray", 
              "stroke": "black", 
              "strokeWidth": 4, 
              "draggable": true},
              "className":"Rect"},

              // Bottom Right
            // {
            //   "attrs": {
            //     "x": rightCol,
            //     "y": 1000,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 75,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,
            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },
            // Top Right
            {
              "attrs": {
                "x": rightCol,
                "y": tightToTop,
                "sides": 4,
                "width": 200,
                "height": 100,
                "shadowBlur": 10,
                "cornerRadius": 10,
                "fill": "white",
                "shadowColor": "gray",
                "stroke": "black",
                "strokeWidth": 4,
                "draggable": true
              },
              "className": "Rect"
            },

            // Bottom Left
            // {
            //   "attrs": {
            //     "x": 30,
            //     "y": 1000,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 75,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,
            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },


              // Midpage
            {
              "attrs": {
                "x": horizontalCenter,
                "y": tightToTop,
                "sides": 4,
                "width": thirdWidth,
                "height": 100,
                "shadowBlur": 10,
                "cornerRadius": 10,
                "fill": "white",
                "shadowColor": "gray",
                "stroke": "black",
                "strokeWidth": 4,
                "draggable": true
              },
              "className": "Rect"
            },
           
            // RIGHT LONGS
            {
              "attrs": {
                "x": horizontalCenter,
                "y": 150,
                "sides": 4,
                "width": 550,
                "height": 200,
                "shadowBlur": 10,
                "cornerRadius": 10,

                "fill": "white",
                "shadowColor": "gray",
                "stroke": "black",
                "strokeWidth": 4,
                "draggable": true
              },
              "className": "Rect"
            },

            {
              "attrs": {
                "x": horizontalCenter,
                "y": 610,
                "sides": 4,
                "width": 550,
                "height": 200,
                "shadowBlur": 10,
                "cornerRadius": 10,

                "fill": "white",
                "shadowColor": "gray",
                "stroke": "black",
                "strokeWidth": 4,
                "draggable": true
              },
              "className": "Rect"
            },

            // LEFT SHORTS
            {
              "attrs": {
                "x":leftCol,
                "y": 150,
                "sides": 4,
                "width": 200,
                "height": 200,
                "shadowBlur": 10,
                "cornerRadius": 10,
                "fill": "white",
                "shadowColor": "gray",
                "stroke": "black",
                "strokeWidth": 4,
                "draggable": true
              },
              "className": "Rect"
            },

            {
              "attrs": {
                "x": leftCol,
                "y": 610,
                "sides": 4,
                "width": 200,
                "height": 200,
                "shadowBlur": 10,
                "cornerRadius": 10,
                "fill": "white",
                "shadowColor": "gray",
                "stroke": "black",
                "strokeWidth": 4,
                "draggable": true
              },
              "className": "Rect"
            },

            // LEFT LONGS
            {
              "attrs": {
                "x": 30,
                "y": 380,
                "sides": 4,
                "width": 550,
                "height": 200,
                "shadowBlur": 10,
                "cornerRadius": 10,

                "fill": "white",
                "shadowColor": "gray",
                "stroke": "black",
                "strokeWidth": 4,
                "draggable": true
              },
              "className": "Rect"
            },
            {
              "attrs": {
                "x": 30,
                "y": 840,
                "sides": 4,
                "width": 550,
                "height": 200,
                "shadowBlur": 10,
                "cornerRadius": 10,

                "fill": "white",
                "shadowColor": "gray",
                "stroke": "black",
                "strokeWidth": 4,
                "draggable": true
              },
              "className": "Rect"
            },


            // {
            //   "attrs": {
            //     "x":leftCol,
            //     "y": 290,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 125,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },

            
            // {
            //   "attrs": {
            //     "x":leftCol,
            //     "y": 570,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 125,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },

            // {
            //   "attrs": {
            //     "x": leftCol,
            //     "y": 570,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 125,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },

            // {
            //   "attrs": {
            //     "x": rightCol,
            //     "y": 290,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 125,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },

            // RIGHT SHORTS
            {
              "attrs": {
                "x": rightCol,
                "y": 380,
                "sides": 4,
                "width": 200,
                "height": 200,
                "shadowBlur": 10,
                "cornerRadius": 10,

                "fill": "white",
                "shadowColor": "gray",
                "stroke": "black",
                "strokeWidth": 4,
                "draggable": true
              },
              "className": "Rect"
            },

            {
              "attrs": {
                "x": rightCol,
                "y": 840,
                "sides": 4,
                "width": 200,
                "height": 200,
                "shadowBlur": 10,
                "cornerRadius": 10,

                "fill": "white",
                "shadowColor": "gray",
                "stroke": "black",
                "strokeWidth": 4,
                "draggable": true
              },
              "className": "Rect"
            },

            // {
            //   "attrs": {
            //     "x": rightCol,
            //     "y": 570,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 125,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },


            // {
            //   "attrs": {
            //     "x": rightCol,
            //     "y": 710,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 125,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },

            // {
            //   "attrs": {
            //     "x": rightCol,
            //     "y": 850,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 125,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },

            // {
            //   "attrs": {
            //     "x": leftCol,
            //     "y": 710,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 125,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },

            // {
            //   "attrs": {
            //     "x": leftCol,
            //     "y": 850,
            //     "sides": 4,
            //     "width": 200,
            //     "height": 125,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },



            
            // BOTTOM ROW

            // {
            //   "attrs": {
            //     "x": horizontalCenter,
            //     "y": 990,
            //     "sides": 4,
            //     "width": 135,
            //     "height": 100,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },

            // {
            //   "attrs": {
            //     "x": 445,
            //     "y": 990,
            //     "sides": 4,
            //     "width": 135,
            //     "height": 100,
            //     "shadowBlur": 10,
            //     "cornerRadius": 10,

            //     "fill": "white",
            //     "shadowColor": "gray",
            //     "stroke": "black",
            //     "strokeWidth": 4,
            //     "draggable": true
            //   },
            //   "className": "Rect"
            // },


]},]},]



export default function Templates(props) {
  props.setCurrentStage(templates[0])
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null)
    props.setCurrentStage(templates[0])
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
          <MenuItem onClick={handleClose} id={"template_1"} data-id={index}> Template {index + 1}</MenuItem>
          ))}
        </Menu>
      </div>
  );
}

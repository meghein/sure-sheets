import React, { useState, useEffect } from 'react'
import Konva from 'konva'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

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

export default function Test() {
  const [history, setHistory] = useState([])
  const [currentStage, setCurrentStage] = useState([])
  let historyIndex = 0;
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  const layer = new Konva.Layer();

  function loadTemplate(template) {
    const newStage = Konva.Node.create(template, 'canvas');
    newStage.add(layer);;
    return newStage
  }


  useEffect(() => {
    if (currentStage.length !== 0) {
      loadTemplate(currentStage)
    }
  }, [currentStage])
  
  function createImage(attrs, source) {
    return Object.assign({}, attrs, {
      x: 0,
      y: 0,
      src: source,
    });
  }

  function createText(attrs, text) {
    return Object.assign({}, attrs, {
      x: 0,
      y: 0,
      text: text,
    });
  }

  function create() {
    layer.destroyChildren();
    history.forEach((item, index) => {
      let node = '';
      if (item.src) {
        node = new Konva.Image({
          draggable: true,
          name: 'item-' + index,
        });
      } else if (item.text) {
        node = new Konva.Text({
          text: item.text,
          draggable: true,
          name: 'item-' + index,
        });
      }
      
      layer.add(node);
      node.on('dragend', () => {
        const tempState = [...history];
        tempState[index] = Object.assign({}, tempState[index], {
          x: node.x(),
          y: node.y(),
        });
        // save it into history
        setHistory(tempState);

      });

      node.on('click', () => {
        const tempState = [...history];
        tempState[index] = Object.assign({}, tempState[index]);
        setHistory(tempState);
        // update canvas from history
        update(history);
      });

      // let img = new window.Image();
      // img.onload = function () {
      //   node.image(img);
      //   update(history);
      //   layer.batchDraw();
      // };
      // img.src = item.src;
    });
    update(history);
  }

  function update() {
    history.forEach(function (item, index) {
      let node = loadTemplate().findOne('.item-' + index);
      node.setAttrs({
        x: item.x,
        y: item.y,
      });
    });
    layer.batchDraw();
  }

  
  create(history);


  function addImage() {
      // create new object
      history.push(
        createImage({
          x: width * Math.random(),
          y: height * Math.random(),
        })
      );
      // recreate canvas
      create(history);
    };

    function handleUndo() {
      if (historyIndex === 0) {
        // layer.destroyChildren();;
        return
      }
      historyIndex -= 1;
      const tempState = [...history];
      tempState.pop()
      setHistory(tempState)
      // create everything from scratch
      // create(clippingHistory);
    };


  // STUFF FOR TEMPLATE MENU
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null)
    setCurrentStage(templates[e.currentTarget.dataset.id])
  }

  return (
    <div>
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
      {/* <button onClick={loadTemplate}>template</button> */}
      <button onClick={addImage}>image</button>
      <button onClick={handleUndo}>undo</button>
    </div>
  )
}
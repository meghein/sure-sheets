import React from 'react'
import UrlImage from "./UrlImage"
import Konva from 'konva'

export default function Test() {
  let state = [];
  // our history
  let appHistory = [state];
  let appHistoryStep = 0;

  const width = window.innerWidth;
  const height = window.innerHeight;

  const layer = new Konva.Layer();

  const newTemplates = [
    {"attrs":{"width":850,"height":1100},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]},
    {"attrs":{"width":850,"height":1100},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":200,"y":200,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]}
  ];

  function loadTemplate() {
    const newTemplate = {"attrs":{"width":850,"height":1100},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]}
    const newStage = Konva.Node.create(newTemplate, 'canvas');
    newStage.add(layer);;
    return newStage
  }

  function createObject(attrs) {
    return Object.assign({}, attrs, {
      // define position
      x: 0,
      y: 0,
      src: '',

    });
  }

  function createImage(attrs) {
    return Object.assign(createObject(attrs), {
      src: '/images/NERv05SMALLColor.png',
    });
  }

  function create() {
    layer.destroyChildren();
    state.forEach((item, index) => {
      let node = new Konva.Image({
        draggable: true,
        name: 'item-' + index,
        // make it smaller
        scaleX: 0.5,
        scaleY: 0.5,
      });
      layer.add(node);
      node.on('dragend', () => {
        // make new state
        state = state.slice();
        // update object data
        state[index] = Object.assign({}, state[index], {
          x: node.x(),
          y: node.y(),
        });
        // save it into history
        saveStateToHistory(state);
        // don't need to call update here
        // because changes already in node
      });

      node.on('click', () => {
        // apply state changes
        state = state.slice();
        state[index] = Object.assign({}, state[index]);
        // save state to history
        saveStateToHistory(state);
        // update canvas from state
        update(state);
      });

      let img = new window.Image();
      img.onload = function () {
        node.image(img);
        update(state);
        layer.batchDraw();
      };
      img.src = item.src;
    });
    update(state);
  }

  function update() {
    state.forEach(function (item, index) {
      let node = loadTemplate().findOne('.item-' + index);
      node.setAttrs({
        x: item.x,
        y: item.y,
      });

      if (!node.image()) {
        return;
      }
    });
    layer.batchDraw();
  }

  function saveStateToHistory(state) {
    appHistory = appHistory.slice(0, appHistoryStep + 1);
    appHistory = appHistory.concat([state]);
    appHistoryStep += 1;
  }
  create(state);

  
  function addImage() {
      // create new object
      state.push(
        createImage({
          x: width * Math.random(),
          y: height * Math.random(),
        })
      );
      // recreate canvas
      create(state);
    };

  function handleUndo() {
    if (appHistoryStep === 0) {
      return;
    }
    appHistoryStep -= 1;
    state = appHistory[appHistoryStep];
    // create everything from scratch
    create(state);
  };

  
    
  return (
    <div>
      <button onClick={loadTemplate}>template</button>
      <button onClick={addImage}>image</button>
      <button onClick={handleUndo}>undo</button>
    </div>
  )
}

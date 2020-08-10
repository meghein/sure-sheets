import { useRef } from 'react';

export default function useDragAndDrop(canvasItems, setCanvasItems) {
  const dragItem = useRef();
  const stageRef = useRef();

  function onDragStart(e) {
    if(e.target.src) {
      dragItem.current = e.target.src;
    } else if(e.target.text) {
      dragItem.current = e.target.text
    }
  }
  
  function onDragOver(e) {
    e.preventDefault()
  }
  
  function onDrop(e) {
    stageRef.current.setPointersPositions(e)
    console.log("point positions", stageRef.current.getPointersPositions())
    const tempState = [...canvasItems];
    tempState.push({
      x: stageRef.current.getPointersPositions()[0].x,
      y: stageRef.current.getPointersPositions()[0].y,
      src: dragItem.current
    });
    setCanvasItems(tempState)
  }

  return {
    stageRef,
    onDragStart,
    onDragOver,
    onDrop,
  }
};
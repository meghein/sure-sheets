import React, { Fragment } from 'react'
import NewText from './NewText'
import NewImage from './NewImage'


export default function Clippings(props) {
  console.log("canvas items", props.canvasItems)

  return (
    <Fragment>
      {props.canvasItems.map((item, index) => {
        if(item.src) {
          return (
            <NewImage
            key={index}
            item={item}
            shapeProps={item}
            isSelected={index === props.targetShape}
            onSelect={(e) => {
              console.log("target", e.target)
              props.setTargetShape(index)
            }}
            onChange={newAttrs => {
              const temp = [...props.canvasItems]
              temp[index] = newAttrs;
              props.setCanvasItems(temp);
            }}
            setTargetShape={props.setTargetShape}
            />
          )}
        if(item.text) {
          return (
          <NewText
            key={index}
            text={item.text}
            fontSize={item.fontSize}
            fill={item.colour}
            fontFamily={item.activeFontFamily}
            align={item.align}
            setTextboxState={props.setTextboxState}
            item={item}
            shapeProps={item}
            isSelected={index === props.targetShape}
            onSelect={() => {
              props.setTargetShape(index)
            }}
            onChange={newAttrs => {
              const temp = [...props.canvasItems]
              temp[index] = newAttrs;
              props.setCanvasItems(temp);
            }}
            setTargetShape={props.setTargetShape}
          />)
        }
      })}
    </Fragment>
  )
};

import React, { Fragment } from 'react'
import NewText from './NewText'
import NewImage from './NewImage'


export default function Clippings(props) {
  return (
    <Fragment>
      {props.canvasItems.map((item, index) => {
        if(item.src) {
          return <NewImage
          key={`image-${index}`}
          item={item}
          shapeProps={item}
          isSelected={item.id === props.selectedId}
          onSelect={() => {
            return props.selectShape(item.id);
          }}
          onChange={newAttrs => {
            const temp = [...props.canvasItems]
            temp[index] = newAttrs;
            props.setCanvasItems(temp);
          }}
          />
        }
        if(item.text) {
          return (
          <NewText
            key={`text-${index}`}
            setTextboxState={props.setTextboxState}
            text={item.text}
            fontSize={item.fontSize}
            fill={item.colour}
            fontFamily={item.activeFontFamily}
            align={item.align}
          />)
        }
      })}
    </Fragment>
  )
};

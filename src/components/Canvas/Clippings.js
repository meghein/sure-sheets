import React, { Fragment, useState } from 'react'
import NewText from './NewText'
import NewImage from './NewImage'


export default function Clippings(props) {
  // const [selected, setSelected] = useState(false)

  return (
    <Fragment>
      {props.canvasItems.map((item, index) => {
        if(item.src) {
          return <NewImage
          id={`image-${index}`}
          item={item}
          shapeProps={item}
          isSelected={item.id === props.selectedId}
          onSelect={() => {
            props.selectShape(item.id);
          }}
          onChange={newAttrs => {
            const temp = [...props.canvasItems]
            temp[index] = newAttrs;
            props.setCanvasItems(temp);
          }}
          
          canvasItems={props.canvasItems}
          setCanvasItems={props.setCanvasItems}
          index={index}
          />
        }
        if(item.text) {
          return (
          <NewText
            id={`text-${index}`}
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

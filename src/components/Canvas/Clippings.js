import React, { Fragment, useEffect } from 'react'
import useStageLoader from '../../hooks/useStageLoader'

import NewText from './NewText'
import NewImage from './NewImage'


export default function Clippings(props) {
  // const { canvasItems, setCanvasItems } = useStageLoader()

  useEffect(() => {
    console.log("canvas items", props.canvasItems)
  }, [props.canvasItems])


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
            props.selectShape(item.id);
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
            fontSize={props.fontSize}
            fill={props.fill}
          />)
        }
      })}
    </Fragment>
  )
};

import React, { Fragment } from 'react'

import NewText from './NewText'
import NewImage from './NewImage'

export default function Clippings(props) {
  return (
    <Fragment>
      {props.clippingHistory.map((item, index) => {
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
            const temp = [...props.clippingHistory]
            temp[index] = newAttrs;
            props.setClippingHistory(temp);
          }}
          />
        }
        if(item.text) {
          return <NewText key={`text-${index}`} text={item.text} fontSize={props.fontSize}
          fill={props.fill}/>
        }
      })}
    </Fragment>
  )
};

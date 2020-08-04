import React from 'react'

import Toolbar from './LeftDrawer/Toolbar/Toolbar'
import './Left.scss'

export default function Left(props) {
  console.log("left props", props)
  return (
    <div className="left">
      <Toolbar
         onDragStart={props.onDragStart}
         onDrop={props.onDrop}
         onDragOver={props.onDragOver}
         imgData={props.imgData}
      />
    </div>
  )
}

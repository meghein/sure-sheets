import React from 'react'
import './Left.scss'

import Uploads from './Uploads'
import Templates from './Templates'
import Colours from './Colours'

export default function Left(props) {
  return (
    <div className="left">
      <Uploads 
        newImport={props.newImport}
        setNewImport={props.setNewImport}
        clippings={props.clippings}
        setClippings={props.setClippings}
      />
      <Templates
        setCurrentStage={props.setCurrentStage}
      />
      <Colours
        setCanvasColour={props.setCanvasColour}
        setBoxColour={props.setBoxColour}
      />
    </div>
  )
}

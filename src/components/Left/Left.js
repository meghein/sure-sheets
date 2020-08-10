import React from 'react'
import './Left.scss'

import Files from './Files'
import Templates from './Templates'
// import Toolbar from './Toolbar'

export default function Left(props) {
  return (
    <div className="left">
      <Files 
        newImport={props.newImport}
        setNewImport={props.setNewImport}
        clippings={props.clippings}
        setClippings={props.setClippings}
      />
      <Templates
        setCurrentStage={props.setCurrentStage}
      />
    </div>
  )
}

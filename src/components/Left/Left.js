import React from 'react'
import './Left.scss'

import Uploads from './Uploads'
import Templates from './Templates'
import Colours from './Colours'
import SaveToPDF from './SaveToPDF'

export default function Left(props) {

  function deleteItem() {
    const tempItems = [...props.canvasItems];
    const filteredArr = tempItems.filter(item => item !== tempItems[props.targetShape])
    props.setCanvasItems(filteredArr);
  }

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
      <SaveToPDF
        canvasColour={props.canvasColour}
      />
      <img className="MrCan" src="./images/TrashCan.png" alt="It's Mr. Can, the place where unwanted clippings go." onClick={deleteItem}/>
    </div>
  )
}

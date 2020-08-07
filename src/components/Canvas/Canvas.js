import React, {useEffect} from 'react';
import './Canvas.scss';

export default function Canvas(props) {
  
  useEffect(() => {
    if (props.currentStage.length !== 0) {
      props.loadTemplate(props.currentStage)
    }

  }, [props.currentStage])

  return (
    <div className='canvas' id='canvas'/>
  )
}

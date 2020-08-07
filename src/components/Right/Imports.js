import React from 'react'
import './Imports.scss'
import { Button } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import { Image } from 'react-konva';
// import useImage from 'use-image';

export default function Imports(props) {
  function buildTesseractClippings(clippings) {
    const tempArr = []
    clippings.forEach((clipping) => {
      if((typeof(clipping) !== 'object') && (clipping !== '')) {
        tempArr.push({
          title: `${clipping.slice(0, 18)}...`,
          text: clipping,
        })
      }
    })
    return tempArr
  }
  const tesseractClippings = buildTesseractClippings(props.clippings);
  const filteredClippings = props.clippings.filter(clipping => typeof(clipping) === 'object' );
  const imageClippings = filteredClippings.map((clipping, index) => {
    return <img src={(filteredClippings[index].image.src)} alt={index} key={index}/>
  })
  console.log("tessClips", tesseractClippings)

  function selectTarget(e) {
    props.setSelected(e.target.value)
    props.addImage()
    console.log("selected", props.selected)
    console.log(props.clippings)
  }
 
  function selectTargetText(e) {
    props.setSelected(e.target.value)
  }

  return (
    <div className="imports">
      {tesseractClippings.map((clipping, index) => (
          <button
            key={`text${index}`}
            onClick={selectTargetText}
            value={clipping.text}
          >
            {clipping.title}
          </button>

      ))}

      {imageClippings.map((image, index) => (
        
        <button
          key={`image${index}`}
          onClick={selectTarget}
          value={(filteredClippings[index].image.src)}
        >
          {image}
        </button>
        
          // <Image
          //   image={clipping}
          //   x={clipping.x}
          //   y={clipping.y}
          //   offsetX={clipping ? clipping.width / 2 : 0}
          //   offsetY={clipping ? clipping.height / 2 : 0}
          //   draggable
          //   width={200}
          //   height={200}
          // />
        
      ))}
    </div>
  )
};
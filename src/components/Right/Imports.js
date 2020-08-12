import React from 'react'
import './Imports.scss'

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
  
  const imageClippings = props.clippings
    .filter(clipping => typeof(clipping) === 'object' )
    .map((clipping) => { return (clipping.image.src)})
    
  function handleImageClick(e) {
    console.log("src", e.target.src)
    props.addImage(e.target.src)
  }
 
  function handleTextClick(e) {
    props.setTextValue(e.target.value)
  }

  return (
    <div className="imports">
      {tesseractClippings.map((clipping, index) => (
          <button
            key={`text_${index + 1}`}
            onClick={handleTextClick}
            value={clipping.text}
          >
            {clipping.title}
          </button>
      ))}

      {imageClippings.map((image, index) => (
        <div key={`image_${index}`}>
        <img
          width="100%"
          alt={`clipping-${index}`}
          onClick={handleImageClick}
          src= {image}
          draggable="true"
          onDragStart={props.onDragStart}
          />
      </div>
      ))}
    </div>
  )
};
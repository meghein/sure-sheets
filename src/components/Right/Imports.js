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
  const filteredClippings = props.clippings.filter(clipping => typeof(clipping) === 'object' );
  const imageClippings = filteredClippings.map((clipping, index) => {
    return <img src={(filteredClippings[index].image.src)} alt={index} key={index}/>
  })
  console.log("tessClips", tesseractClippings)

  function moveImage(image, index) {

  }
 
  function selectTargetText(e) {
    props.setSelected(e.target.value)
  }

  return (
    <div className="imports">
      {tesseractClippings.map((clipping, index) => (
          <button
            class="clipping-text"
            key={`text${index}`}
            onClick={selectTargetText}
            value={clipping.text}
          >
            {clipping.title}
          </button>

      ))}

      {imageClippings.map((image, index) => (
        
        <button class="clipping-image" key={index} onClick={moveImage(image, index)}>{image}</button>
        
      ))}
    </div>
  )
};
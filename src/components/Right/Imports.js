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

  function createObject(attrs) {
    return Object.assign({}, attrs, {
      text: '',
      src: '',
      x: 0,
      y: 0,

    });
  }

  function createImage(attrs, source) {
    return Object.assign(createObject(attrs), {
      src: source,
    });
  }

  function createText(attrs, text) {
    return Object.assign(createObject(attrs), {
      text: text,
    });
  }

  function handleImageClick(e) {
    console.log("src", e.target.src)

    props.addImage(e.target.src)
  }
 
  function selectTargetText(e) {
    props.setSelected(e.target.value)
  }

  return (
    <div className="imports">
      {tesseractClippings.map((clipping, index) => (
          <button
            key={`text_${index + 1}`}
            onClick={selectTargetText}
            value={clipping.text}
          >
            {clipping.title}
          </button>

      ))}

      {imageClippings.map((image, index) => (
        
        <button
          key={`image_${index + 1}`}
          onClick={handleImageClick}
          value={image}
        >
          {image}
        </button>
      
        
      ))}
    </div>
  )
};
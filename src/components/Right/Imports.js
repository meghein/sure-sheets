import React from 'react'
import ReactQuill from 'react-quill';

// usestyles goes here

export default function Imports(props) {


  // loop goes here
  function importsLoop(clippings) {
    const loops = clippings.map((clipping, index) => {
      console.log(typeof(clipping))
      if(clipping === '') {
        return null
      }
      if(typeof(clipping) === 'object') {
        return <img src={(clippings[index].image.src)} alt={index} key={index}/>
      } else {
        return <div key={index}>{clipping}</div>
      }
    })
    return loops
  }


  return (
    <div>
      {/* <ReactQuill
        id="quill"
        theme="bubble"
        value={}
      /> */}
      {importsLoop(props.clippings)}
    </div>
  )
}

/*

loop through, if typeof === object than src is image[index].url = src if not image[index].title = clipping

images []

map
object:
{url: -
title: null
width: 50%
}

else...

{url: null
title: clipping
width: 50%
}

const images = [
  {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    width: '30%',
  },
];





*/

import React from 'react';
import './CloudinaryWidget.scss'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button, IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


export default function CloudinaryWidget(props) {
  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'flvjwbbo')
    props.setLoading(true)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/bryanpgomes/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    props.setImageURL(file.secure_url)
    props.setLoading(false)
  }

  function setTess()  {
    props.setLoadTess(true)
  }

  function imageClipping() {
    const importedClipping = new window.Image()
    importedClipping.src = props.imageURL
    console.log(importedClipping)
    props.addClipping({image: importedClipping})
  }

  return (
    <div>
      {props.loading && <CircularProgress />}
      {props.imageURL && (
        <div>
        <img src={props.imageURL} width="190" alt="clipping"/>
        <Button variant="contained" color="primary" onClick={setTess}>
          This is text
        </Button>
        <Button variant="contained" color="primary" onClick={imageClipping}>
          This is an image
        </Button>
        </div>
      ) }
    </div>
  )
}

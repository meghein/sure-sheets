import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogContent, DialogActions, IconButton } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';

import { createWorker } from 'tesseract.js';

// import CloudinaryWidget from './CloudinaryWidget';
// import Tesseract from './Tesseract';

import './index.scss'

export default function CustomizedDialogs(props) {
  const [open, setOpen] = useState(false);
  const [imageURL, setImageURL] = useState('')
  const [loading, setLoading] = useState(false)
  const [another, setAnother] = useState(false)

  const worker = createWorker({
    logger: m => {
      console.log(m.progress)
    }
  });

  const addClipping = (newImport) => {
    const tempClippings = [...props.clippings];
    tempClippings.push(newImport);
    props.setClippings(tempClippings);
    console.log(props.clippings)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    setOpen(false)
    setImageURL(null)
    setLoading(false)
    setAnother(false)
  }

  const uploadImage = async e => {
    setAnother(false)
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'flvjwbbo')
    setLoading(true)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/bryanpgomes/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImageURL(file.secure_url)
    setLoading(false)
    
  }

  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(imageURL);
    addClipping(text);
  };

  function setTess()  {
    setImageURL(null)
    setLoading(true)
    setImageURL(null)
    doOCR().then(() => {
      setLoading(false)
      setAnother(true)
    })
  }

  function imageClipping() {
    const importedClipping = new window.Image()
    importedClipping.src = imageURL
    console.log(importedClipping)
    addClipping({image: importedClipping})
    setImageURL(null)
    setAnother(true)
  }

  return (
    <div>
      <img src="images/TESScolored.png" width="90%" background="none" alt="Tess, the helpful import bot" onClick={handleClickOpen} />
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>  
        <DialogContent dividers className='upload-content'>
          <div className='upload-text'>{another && (
            <h2>Got more?</h2>    
          )}
          {!loading && (<label htmlFor="icon-button-file">
            <input
              className="input"
              accept="image/*"
              id="icon-button-file"
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={uploadImage}
              style={{display: "none"}}
            />
              <Button color="primary" aria-label="upload picture" component="span">
                {!imageURL && "Click here to upload"}
              </Button>
          </label>)}</div>

          <div>
            {/* {loading && <CircularProgress />} */}
            {imageURL && (
              <div className='uploads'>
              <img className='uploaded-file' src={imageURL} width="190" alt="clipping"/>
              <div className='upload-buttons'>
              <Button variant="contained" color="primary" onClick={setTess}>
                This is text
              </Button>
              <Button variant="contained" color="primary" onClick={imageClipping}>
                This is an image
              </Button>
              </div>
              </div>
            )}
          </div>
          {loading &&
            <img src='images/NERv05-spinning.gif' background="none" alt="Spinning NERv05"/>}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleReset} color="primary">
            All done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};
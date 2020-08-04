import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {Image} from 'cloudinary-react';
import './Dropzone.scss';

export default function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  return (
    <div class="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}
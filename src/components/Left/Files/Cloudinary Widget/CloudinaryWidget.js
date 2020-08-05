import React, {useState, useEffect} from 'react';
import { createWorker } from 'tesseract.js';

export default function CloudinaryWidget(props) {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  //Tess code
  const worker = createWorker({
    logger: m => console.log(m.progress),
  });
  //end of Tess code
  const uploadImage = async e => {
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

    setImage(file.secure_url)
    setLoading(false)
  }
  //Tess code
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(image);
    props.addClipping(text);
  };

  useEffect(() => {
    doOCR();
    console.log("inside widget useEffect")
  }, [image]);
  //End of tess code
  console.log("image", image);
  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {/* {loading ? (
        <h3>Loading...</h3>
        ): (
        <h3>Success!</h3>
        //<img src={image} style={{width: '300px'}}/>
        //<input type="text" value={props.clippings} />
        )
      } */}
    </div>
  )
}

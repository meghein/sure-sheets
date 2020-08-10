import React, { useState, useEffect } from 'react'
import { createWorker } from 'tesseract.js';
import TesseractLoader from './TesseractLoader'


export default function Tesseract(props) {
  const [loading, setLoading] = useState(null)

  const worker = createWorker({
    logger: m => {
      console.log(m.progress)
      setLoading(parseInt(m.progress))
    }
  });

  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(props.imageURL);
    props.addClipping(text);
  };

  useEffect(() => {
    doOCR();
  }, [props.imageURL]);

  return (
    <TesseractLoader
      loading={loading}
    />
  )
}
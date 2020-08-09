import React from 'react'
import { Image } from 'react-konva';
import useImage from 'use-image';

export default function UrlImage(props) {
  const [img] = useImage(props.src);
  return (
  
    <Image
      image={img}
      x={200}
      y={300}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      draggable
      width={200}
      height={200}
    />
    
    
  )
};
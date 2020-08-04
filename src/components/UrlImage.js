import React from 'react'
import { Image } from 'react-konva';
import useImage from 'use-image';

export default function UrlImage(props) {
  console.log("urlImage props", props);
  const [img] = useImage(props.image.src);
  return (
    <Image
      image={img}
      x={props.image.x}
      y={props.image.y}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      draggable
    />
  )
};
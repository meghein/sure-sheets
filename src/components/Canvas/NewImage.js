import React from 'react'
import { Image } from 'react-konva';
import useImage from 'use-image';

export default function UrlImage(props) {
  const [img] = useImage(props.item.src);
  return (
    <Image
      image={img}
      x={props.item.x}
      y={props.item.y}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      draggable
    />
  )
};
import React, { useEffect, useRef } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";

export default function NewImage(props) {
  const shapeRef = useRef();
  const trRef = useRef();
  const [image] = useImage(props.selected);
  useEffect(() => {
    if (props.selected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [props.selected]);
  return (
    <React.Fragment>
      <Image
        onClick={props.setSelected}
        image={image}
        ref={shapeRef}
        draggable
        onDragEnd={e => {
          onChange({
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={e => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          onChange({
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY,
          });
        }}
      />
      {props.selected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
};
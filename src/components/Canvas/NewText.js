import React, { useRef, useEffect, Fragment } from 'react'
import { Text, Transformer } from 'react-konva';
import useTextSettings from '../../hooks/useTextSettings'

export default function NewText(props) {
  const shapeRef = useRef();
  const trRef = useRef();
  const { setTextboxState } = useTextSettings()

  useEffect(() => {
    if (props.isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [props.isSelected]);
  

  const openTextArea = (e) => {
    // e.target.hide()
    setTextboxState(true)
    props.onSelect()
  }

  return (
    <Fragment>
      < Text
        text={props.item.text}
        fontSize={props.fontSize}
        fill={props.fill}
        fontFamily={props.fontFamily}
        align={props.align}
        // width={300}
        onClick={openTextArea}
        onTap={props.onSelect}
        ref={shapeRef}
        {...props.shapeProps}
        draggable
        onDragEnd={e => {
          props.onChange({
            ...props.shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          props.onChange({
            ...props.shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
      {props.isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </Fragment>
  )
}
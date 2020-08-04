import React, {useState} from 'react';
import './Canvas.scss';
import { Stage, Layer, Text } from 'react-konva';
import UrlImage from "./UrlImage"

// import Toolbar from '../components/LeftDrawer/Toolbar/Toolbar'

export default function Canvas(props) {
  const newImage = new window.Image()
  newImage.src = "/images/NERv05SMALLColor.png"
  const [images, setImages] = useState([{image: newImage}]);

  function onDrop(e) {
    // register event position
    console.log("onDrop", images)
    console.log(props.stageRef.current.setPointersPositions(e));
    props.stageRef.current.setPointersPositions(e);
    // add image
    props.setImages(
      props.images.concat([
        {
          ...props.stageRef.current.getPointerPosition(),
          src: props.dragUrl.current
        }
      ])
      );
    }

  console.log("canvas props", props);
  // let onDrop = props.onDrop
  return(
    <div className='canvas' id='canvas'
    onDrop={e => {

        // register event position
        console.log("onDrop", images)
        console.log(props.stageRef.current.setPointersPositions(e));
        props.stageRef.current.setPointersPositions(e);
        // add image
        props.setImages(
          props.images.concat([
            {
              ...props.stageRef.current.getPointerPosition(),
              src: props.dragUrl.current
            }
          ])
          );
    }}
    onDragOver={e => e.preventDefault()}
  >
      <Stage  container='canvas' width={600} height={600} ref={props.stageRef}>
        <Layer>
          <Text x={100} y={100} text="Test" draggable />
          {props.images.map((image, index) => {
              return <UrlImage key={index} image={image} />;
            })}
        </Layer>
      </Stage> 
    </div>
  )
}

// import React from 'react';
// import { Stage, Layer, Image } from 'react-konva';
// import useImage from 'use-image';

// const URLImage = ({ image }) => {
//   const [img] = useImage(image.src);
//   return (
//     <Image
//       image={img}
//       x={image.x}
//       y={image.y}
//       // I will use offset to set origin to the center of the image
//       offsetX={img ? img.width / 2 : 0}
//       offsetY={img ? img.height / 2 : 0}
//     />
//   );
// };

// export default function Canvas() {
//   return (
//     <div>
//       <Stage
//         width={600}
//         height={window.innerHeight}
//         style={{ border: '1px solid grey' }}
//         ref={props.stageRef}
//       >
//         <Layer>
//           {props.images.map(image => {
//             return <URLImage image={image} />;
//           })}
//         </Layer>
//       </Stage>
//     </div>
//   );
// };


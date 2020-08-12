import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
  // function showAnswerById (id) {
  // const robot = "../../../../images/SpinningNerv05s/NERv05Cry.png"
  // const robot30 = "../../../../images/SpinningNerv05s/NERv05Cry30.png"
  // const robot60 = "../../../../images/SpinningNerv05s/NERv05Cry60.png"
  // const robot90 = "../../../../images/SpinningNerv05s/NERv05Cry90.png"
  // const robot120 = "../../../../images/SpinningNerv05s/NERv05Cry120.png"
  // const robot150 = "../../../../images/SpinningNerv05s/NERv05Cry150.png"
  // const robot180 = "../../../../images/SpinningNerv05s/NERv05Cry180.png"
  // const robot210 = "../../../../images/SpinningNerv05s/NERv05Cry210.png"
  // const robot240 = "../../../../images/SpinningNerv05s/NERv05Cry240.png"
  // const robot270 = "../../../../images/SpinningNerv05s/NERv05Cry270.png"
  // const robot300 = "../../../../images/SpinningNerv05s/NERv05Cry300.png"
  // const robot330 = "../../../../images/SpinningNerv05s/NERv05Cry330.png"
  // function youSpinMeRightRound() {
  //   let timer = 100
  //   let numberImage = 30
  //   let robotImage = `../../../../images/SpinningNerv05s/NERv05Cry${numberImage}.png`
  //   for (let i = 1; i < 5; i++) {
  //     setTimeout(() => {
  //       numberImage = numberImage * i;
        
  //       console.log(numberImage)
  //       return <img src={robotImage} width="100%" />
  //     }, timer);
  //     timer += 50
  //   }
  // }
  //array of images
  //setTimeout that logs in every couple seconds
  //every couple second, it select a new robot face


  return (
    <>
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="static" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.loading
          )}%`}</Typography> */}
        </Box>
      </Box>
      <CircularStatic/>
      
    </>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {
  const [progress, setProgress] = useState(30);
  let numberImage = 30
  let robotImage = `../../../../images/SpinningNerv05s/NERv05Cry${numberImage}.png`
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 360 ? 30 : prevProgress + 30));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //   }, 500);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  console.log("typeof", typeof (props.loading))
  console.log(progress)
  return (
    <>
      {/* {!props.loading && <CircularProgressWithLabel value={progress} />} */}
      
    </>
  );
}
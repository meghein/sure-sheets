import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

// usestyles goes here
const useStyles = makeStyles((theme) => ({
  imports: {
    display: 'flex',
    flexWrap: 'wrap',
    // minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      // '& $imageTitle': {
      //   border: '4px solid currentColor',
      // },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    size: 14,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Imports(props) {
  const classes = useStyles();
  
  function importsLoop(clippings) {
    const tempArr = [];
    function iterate(clipping, index) {
      if(clipping === '') {
        return null
      }
      if(typeof(clipping) === 'object') {
        tempArr.push({
            url: clippings[index].image.src,
            title: null,
            width: '100%' 
        })
        // return <img src={(clippings[index].image.src)} alt={index} key={index}/>
      } else {
        tempArr.push({
          url: null,
          title: clipping,
          width: '100%'
        })
        // return <div key={index}>{clipping}</div>
      }
    }
    clippings.forEach(iterate)
    return tempArr
  };

  const importedClippings = importsLoop(props.clippings);

  function selected(clipping) {
    if (clipping.url) {
      // image goes to canvas
    }
    if (clipping.title) {
      // text goes to quill
    }
  }


  return (
    <div className={classes.imports}>
      {importedClippings.map((clipping, index) => (
        <ButtonBase
          focusRipple
          key={index}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          // style={{
          //   width: clipping.width,
          // }}
          onClick={selected(clipping)}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${clipping.url})` || null,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {clipping.title || null}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  )
};
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import tileData from './tileData';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    direction: 'column',
    justify: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Templates() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null)
    // This is the info that will be passed up so it can become the chosen template:
    console.log(`Here's the id: ${e.currentTarget.dataset.id}`)
  }

  return (
    <div className={classes.root}>
      <div>
        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          Templates
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {tileData.map((tile) => (
          <MenuItem onClick={handleClose} data-id={tile.img}> <img src={tile.img} alt={tile.title} /></MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}

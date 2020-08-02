import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import topStyles from '../styles/NavBar';

import LeftDrawer from './LeftDrawer/LeftDrawer';
import RightDrawer from './RightDrawer/RightDrawer';
import Canvas from './Canvas/Canvas';


const NavBar = () => {
  const classes = topStyles();
  const [open, setOpen] = useState(false);
  const targetDrawer = useRef();


  const handleDrawerOpen = () => {
    targetDrawer.current.focus();
    console.log(targetDrawer);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return(
        <div>
        <AppBar 
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              ref={targetDrawer}
              edge="start"
              className={clsx(classes.leftMenuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
              Cheat Sheet
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(classes.rightMenuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
      </AppBar>
      <LeftDrawer
        ref={targetDrawer}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <Canvas />
      <RightDrawer
        ref={targetDrawer}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      </div>
    )
}
export default NavBar;
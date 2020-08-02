import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, IconButton, Divider } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import leftStyles from '../../styles/LeftDrawer';

// These components are children of LeftDrawer:
// import Files from './Files'
// import Templates from './Templates'
import Tools from './Tools'

export default function LeftDrawer(props) {
  const classes = leftStyles();
  const theme = useTheme();
  return (
    <Drawer
    // ref={props.ref}
    className={classes.leftDrawer}
    variant="persistent"
    anchor="left"
    open={props.open}
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.leftDrawerHeader}>
      <IconButton onClick={props.handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </div>
    <Divider />
    {/* Will eventually conditionally render these components based on on mode. */}

      {/* <Tesseract/> */}
      {/* <Templates/> */}
      <Tools />

  </Drawer>
  )
}

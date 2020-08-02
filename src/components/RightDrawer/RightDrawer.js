import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, IconButton, Divider, List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import rightStyles from '../../styles/RightDrawer';

import Imports from './Imports'

export default function RightDrawer(props) {
  const classes = rightStyles();
  const theme = useTheme();


  return (
      <Drawer
        ref={props.ref}
        className={classes.rightDrawer}
        variant="persistent"
        anchor="right"
        open={props.open}
        classes={{
          paper: classes.rightDrawerPaper,
        }}
      >
        <div className={classes.rightDrawerHeader}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Imports />
        </List>
      </Drawer>
  )
}

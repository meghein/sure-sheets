import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SignIn from './LoginModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));






export default function ButtonAppBar() {
  const classes = useStyles();
  // For Login Modal
  const [open, setOpen] = React.useState(false);
    const handleClickLoginOpen = () => {
    setOpen(true);
  };
    const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon /> LOGO
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            RoboGraphics
          </Typography>
          <SignIn open={open} handleClose={handleClose} handleClickLoginOpen={handleClickLoginOpen} />
          <Button onClick={handleClickLoginOpen}>Sign in MAYBE WHO KNOWS</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
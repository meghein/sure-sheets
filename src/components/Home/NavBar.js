import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LoginRegisterModal from './LoginRegisterModal';

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

export default function ButtonAppBar(props) {
  const classes = useStyles();
  // For Login Modal
  const [open, setOpen] = React.useState(false);
    const handleClickLoginOpen = () => {
    setOpen(true);
  };
    const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    props.setAuthenticated(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            LOGO
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sure Sheets
          </Typography>
          <LoginRegisterModal setAuthenticated={props.setAuthenticated} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} open={open} handleClose={handleClose} handleClickLoginOpen={handleClickLoginOpen} />
          {!props.authenticated && (<Button color="inherit" onClick={handleClickLoginOpen}>Sign In or Register</Button>)}
          {props.authenticated && (<><div>Logged In As {props.currentUser}</div> <Button color="inherit" onClick={handleLogout}>Logout</Button></>)}
        </Toolbar>
      </AppBar>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LoginRegisterModal from './LoginRegisterModal';
import { spacing } from '@material-ui/system';

import './Navbar.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
 
  title: {
    // flexGrow: 1,
    // marginRight: theme.spacing(2),
  },
  // login: {
  //   flexGrow: 1,
  //   marginLeft: theme.spacing(3)
  // }

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
    <div>
      <AppBar className="navBar" position="static">
        <Toolbar>
          <Typography variant="h6" ml="auto" className={classes.title}>
            Sure Sheets
          </Typography>
          <LoginRegisterModal mr="auto" className={classes.login} setAuthenticated={props.setAuthenticated} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} open={open} handleClose={handleClose} handleClickLoginOpen={handleClickLoginOpen} />
          {!props.authenticated && (<Button color="inherit" onClick={handleClickLoginOpen}>Login | Register</Button>)}
          {props.authenticated && (<><div>Logged In As {props.currentUser}</div> <Button color="inherit" onClick={handleLogout}>Logout</Button></>)}
        </Toolbar>
      </AppBar>
    </div>
  );
}
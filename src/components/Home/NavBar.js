import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LoginRegisterModal from './LoginRegisterModal';

import './Navbar.scss'

export default function ButtonAppBar(props) {
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
    props.setInitialLoad(true);
  };

  return (
    <div>
      <AppBar className="navBar" position="static">
        <Toolbar>
          <Typography variant="h6" ml="auto" className="title">
            Sure Sheets
          </Typography>
          <div className="username-logout">
          <LoginRegisterModal
            mr="auto"
            className="login"
            setAuthenticated={props.setAuthenticated}
            setCurrentUser={props.setCurrentUser}
            currentUser={props.currentUser}
            open={open} handleClose={handleClose}
            handleClickLoginOpen={handleClickLoginOpen}
            setInitialLoad={props.setInitialLoad}
          />
          {!props.authenticated && (<Button color="inherit" onClick={handleClickLoginOpen}>Login | Register</Button>)}
          {props.authenticated && (<><div>Logged In As {props.currentUser}</div> <Button color="inherit" onClick={handleLogout}>Logout</Button></>)}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Login from './Login'
import Register from './Register'

// These styles apply to both Login and Register:

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function LoginRegisterModal(props) {
  const classes = useStyles();
  const {open, handleClickLoginOpen, handleClose} = props;
  const [openReg, setOpenReg] = React.useState(false);
  const toggleReg = () => {
    openReg ? setOpenReg(false) : setOpenReg(true);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="login-registration"
        aria-describedby="open-login-registration-modal"
        >
        {!openReg ?
          <Login setAuthenticated={props.setAuthenticated} handleClose={props.handleClose} classes={classes} toggleReg={toggleReg}/>
        :
          <Register setAuthenticated={props.setAuthenticated} handleClose={props.handleClose} classes={classes} toggleReg={toggleReg}/>
        }
  
      </Modal>
    </>
  );
}

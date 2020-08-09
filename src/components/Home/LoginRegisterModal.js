import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

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
  const {open, handleClose} = props;
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
          <Login setAuthenticated={props.setAuthenticated} classes={classes} toggleReg={toggleReg}/>
        :
          <Register setAuthenticated={props.setAuthenticated} classes={classes} toggleReg={toggleReg}/>
        }
  
      </Modal>
    </>
  );
}

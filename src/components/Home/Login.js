import React, { useState } from 'react';
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
import Container from '@material-ui/core/Container';




export default function Login(props) {
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    console.log(e.target.value)
    setLogin(
      { ...login, [e.target.id]: e.target.value }
    );
  }

  function onSubmitForm(e) {
    e.preventDefault();
    console.log("login", JSON.stringify(login))

    fetch("http://localhost:8001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login)
    }).then(response =>
      response.json().then(data => ({
        data: data,
        status: response.status
      }, props.setCurrentUser(data))
      ))
      .then(res => {
        props.setAuthenticated(true)
        props.handleClose(true)
        props.setInitialLoad(false)

      })
      .catch(err => console.log("Hey this is an error", err))
  }

  return (
    !props.authenticated &&
    (<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={props.classes.paper}>
        <Typography color="primary" component="h1" variant="h5">
          Sign in
          </Typography>
        <form className={props.classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            background-color="rgb(74, 74, 74)"
            className={props.classes.submit}
            onClick={onSubmitForm}
          >
            Sign In
            </Button>
          <Grid container>
            <Grid item>
              <Link onClick={() => props.toggleReg()} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>)
  )
}
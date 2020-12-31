import React, { useState } from 'react';
import { Button, CssBaseline, TextField, Link, Grid, Typography, Container } from '@material-ui/core';

export default function Login(props) {
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
      .then(response => {
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
            className={props.classes.submit}
            onClick={onSubmitForm}
          >
            Sign In
            </Button>
          <Grid container>
            <Grid item>
              {/* <Link onClick={() => props.toggleReg()} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
              <Link onClick={() => props.setInitialLoad(false)} variant="body2" >
                {"Sign in as guest"}
              </Link>

            </Grid>
          </Grid>
        </form>
      </div>
    </Container>)
  )
}
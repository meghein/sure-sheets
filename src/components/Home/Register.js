import React, { useState } from 'react';
import { Button, CssBaseline, TextField, Link, Grid, Typography, Container} from '@material-ui/core'

export default function Register(props) {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  function handleChange(e) {
    console.log(e.target.value)
    setRegister(
     {...register, [e.target.id]: e.target.value}
    );
  }
  
  function onSubmitForm(e) {
    e.preventDefault();
    console.log("register", JSON.stringify(register))
    
    fetch("http://localhost:8001/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(register)
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
      .catch(err => console.log("err", err))
  }
    
  return (
    !props.authenticated &&
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={props.classes.paper}>
        <Typography color="primary" component="h1" variant="h5">
          Register
        </Typography>
        <form className={props.classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
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
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          background-color="rgb(74, 74, 74)"
          className={props.classes.submit}
          onClick={onSubmitForm}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link onClick={() => props.toggleReg()} variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}



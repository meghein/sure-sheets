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
  
  //Pass it onto a query, where email and password = so and so
  //
  //
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  
  
  function handleChange(e) {
    console.log(e.target.value)
    setLogin(
     {...login, [e.target.id]: e.target.value}
    );
  }
  
  // const [error, setError] = useState("");
  
  function onSubmitForm(e) {
    e.preventDefault();
    console.log("login", JSON.stringify(login))
    
    fetch("http://localhost:8001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login)
    })
      .then(response => { 
        console.log("response", response)
        return response.json()
      })
      .then(() => {
        props.setAuthenticated(true)
        // reset form....
      })
      // .then((json) => {
      //   console.log("json success", json)
      // })
      .catch(err => console.log("Hey this is an error", err))
  }

  // useEffect(() =>{
  //   onSubmitForm();
  // }, []);

  return (
    !props.authenticated && 
      (<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={props.classes.paper}>
        <Avatar className={props.classes.avatar}>
          <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={props.classes.submit}
              onClick={onSubmitForm}
              // onclose={a function to disappear}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                        </Link>
              </Grid>
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
      // authenticated && pass props to navbar to show user name.
  )
}
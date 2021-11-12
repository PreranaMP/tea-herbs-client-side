import React, { useState } from 'react';
import { Button, CircularProgress, Container, TextField, Typography, Alert, AlertTitle } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import Navigation from '../../Home/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
 const [loginData, setLoginData] = useState({})
 const history = useHistory();

 const { user, registerUser, isLoading, authError } = useAuth();

 const handleOnBlur = e => {
  const field = e.target.name;
  const value = e.target.value;
  const newLoginData = { ...loginData }
  newLoginData[field] = value;
  setLoginData(newLoginData);
 }

 const handleLoginSubmit = e => {
  if (loginData.password !== loginData.password2) {
   alert('Your passwords do not match each other')
   return
  }
  registerUser(loginData.email, loginData.password, loginData.name, history)
  e.preventDefault();
 }

 return (
  <>
   <Navigation></Navigation>
   <Container style={{ backgroundColor: '#EAF2F8' }}>
    <Typography sx={{ m: 2, p: 2, color: '#2E86C1' }} variant="h4">
     Register
    </Typography>
    {!isLoading && <form onSubmit={handleLoginSubmit}>
     <TextField
      style={{ backgroundColor: 'white' }}
      sx={{ width: '75%', m: 2 }}
      id="outlined-basic"
      label="Your Name"
      name="name"
      onBlur={handleOnBlur}
      variant="outlined" />

     <TextField
      style={{ backgroundColor: 'white' }}
      sx={{ width: '75%', m: 2 }}
      id="outlined-basic"
      label="Your Email"
      name="email"
      type="email"
      onBlur={handleOnBlur}
      variant="outlined" />

     <TextField
      style={{ backgroundColor: 'white' }}
      sx={{ width: '75%', m: 2 }}
      id="outlined-password-input"
      label="Password"
      type="password"
      name="password"
      onBlur={handleOnBlur}
      autoComplete="current-password"
     />

     <TextField
      style={{ backgroundColor: 'white' }}
      sx={{ width: '75%', m: 2 }}
      id="outlined-password-input"
      label="Re-Enter Password"
      type="password"
      name="password2"
      onBlur={handleOnBlur}
      autoComplete="current-password"
     />
     <br />
     <Button sx={{ m: 2 }} style={{ backgroundColor: '#2E86C1', color: 'white', width: '25%' }} variant="contained" type="submit">Register</Button>
     <br />
     <NavLink style={{ textDecoration: 'none' }} to="/login">
      <Button sx={{ color: 'gray' }} variant="text">Already registered? Click here to login!</Button>
     </NavLink>
    </form>}
    {isLoading && <CircularProgress sx={{ mx: 'auto', p: 5 }} color="inherit" />}
    {user?.email && <Alert sx={{ text: 'center' }} severity="success">
     <AlertTitle>Success</AlertTitle>
     Successfully <strong>Registered!</strong>
    </Alert>}
    {authError && <Alert severity="error">
     {authError}
    </Alert>}
   </Container>
  </>
 );
};

export default Register;
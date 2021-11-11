import { Button, Container, TextField, Typography, CircularProgress, Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Home/Navigation/Navigation';

const Login = () => {
 const [loginData, setLoginData] = useState({});
 const { user, loginUser, isLoading, authError } = useAuth();

 const location = useLocation();
 const history = useHistory();

 const handleOnChange = e => {
  const field = e.target.name;
  const value = e.target.value;
  const newLoginData = { ...loginData }
  newLoginData[field] = value;
  setLoginData(newLoginData);
 }
 const handleLoginSubmit = e => {
  loginUser(loginData.email, loginData.password, location, history)
  e.preventDefault();
 }
 return (
  <>
   <Navigation></Navigation>
   <Container style={{ backgroundColor: '#EAF2F8' }}>
    <Typography sx={{ m: 2, p: 2, color: '#2E86C1' }} variant="h4">
     Login
    </Typography>
    <form onSubmit={handleLoginSubmit}>
     <TextField
      style={{ backgroundColor: 'white' }}
      sx={{ width: '75%', m: 2 }}
      id="outlined-basic"
      label="Your Email"
      name="email"
      onChange={handleOnChange}
      variant="outlined" />
     <TextField
      style={{ backgroundColor: 'white' }}
      sx={{ width: '75%', m: 2 }}
      id="outlined-password-input"
      label="Password"
      type="password"
      name="password"
      onChange={handleOnChange}
      autoComplete="current-password"
     />
     <br />
     <Button sx={{ m: 2 }} style={{ backgroundColor: '#2E86C1', color: 'white', width: '25%' }} variant="contained" type="submit">Login</Button>
     <br />
     <NavLink style={{ textDecoration: 'none' }} to="/register">
      <Button sx={{ color: 'gray' }} variant="text">New to<span style={{ color: '#2E86C1' }}> Tea Herbs</span>? Register here!</Button>
     </NavLink>
     {isLoading && <CircularProgress sx={{ mx: 'auto', p: 5 }} color="inherit" />}
     {user?.email && <Alert sx={{ text: 'center' }} severity="success">
      <AlertTitle>Success</AlertTitle>
      Successfully <strong>Logged In!</strong>
     </Alert>}
     {authError && <Alert severity="error">
      {authError}
     </Alert>}
    </form>

   </Container>

  </>
 );
};

export default Login;
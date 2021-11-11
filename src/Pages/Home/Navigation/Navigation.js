import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Box sx={{ m: 2 }}>
        <Typography sx={{ color: '#2E86C1' }} variant="h4">
          TEA HERBS
        </Typography>
        <Typography sx={{ color: 'gray' }} variant="p">
          Calming tea for a Calm Life..
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ backgroundColor: '#A9CCE3' }} position="static">
          <Toolbar sx={{ mx: 'auto' }}>

            <NavLink style={{ textDecoration: 'none' }} to="/home">
              <Button sx={{ mx: 3 }} style={{ textDecoration: 'none', color: 'white' }} color="inherit">Home</Button>
            </NavLink>





            <NavLink style={{ textDecoration: 'none' }} to="/topselections">
              <Button sx={{ mx: 3 }} style={{ textDecoration: 'none', color: 'white' }} color="inherit">Top Selections</Button>
            </NavLink>

            <NavLink style={{ textDecoration: 'none' }} to="reviews">
              <Button sx={{ mx: 3 }} style={{ textDecoration: 'none', color: 'white' }} color="inherit">Reviews</Button>
            </NavLink>

            {
              user?.email ?

                <Button onClick={logOut} sx={{ mx: 3 }} style={{ textDecoration: 'none', color: 'white' }} color="inherit">Logout</Button>


                :
                <NavLink style={{ textDecoration: 'none' }} to="/login">
                  <Button sx={{ mx: 3 }} style={{ textDecoration: 'none', color: 'white' }} color="inherit">Login</Button>
                </NavLink>
            }

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
import React from 'react';
import banner from '../../../images/Banner/teabg.jpg'
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const TopBanner = () => {
 return (
  <Grid container spacing={2}>
   <Grid item xs={12} md={6}>
    <img style={{ width: '100%', height: '75%', marginTop: '5px' }} src={banner} />
   </Grid>
   <Grid item xs={12} md={6}>
    <Typography style={{}} sx={{ color: '#2E86C1', mt: 20, mr: 5 }} variant="h4">
     Authentic Homemade Tea Leaves Handpicked by Experts
    </Typography>
    <NavLink style={{ textDecoration: 'none' }} to="/products"><Button style={{ backgroundColor: '#A9CCE3' }} sx={{ mr: 4, mt: 2 }} variant="contained">See Our Products</Button></NavLink>
   </Grid>
  </Grid>
 );
};

export default TopBanner;
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
 const { _id, image, name, price } = product;

 return (
  <>
   <Grid item xs={4} sm={8} md={6}>
    <Card sx={{ minWidth: 275, m: 5 }}>
     <CardContent>

      <Typography style={{ color: '#2E86C1' }} variant="h5" component="div">
       {name}
      </Typography>
      <img style={{ width: '400px', height: '300px' }} src={image} alt=""></img>

      <Typography style={{ color: 'gray' }} variant="h5">
       Rs. {price}/-
      </Typography>

     </CardContent>
     <CardActions>
      <Link style={{ textDecoration: 'none' }} to={`/moredetails/${_id}`}><Button style={{ backgroundColor: '#A9CCE3', color: 'white' }} size="small">More Details</Button></Link>
     </CardActions>
    </Card>
   </Grid>

  </>
 );
};

export default Product;
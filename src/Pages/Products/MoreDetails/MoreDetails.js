import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Home/Navigation/Navigation';

const MoreDetails = () => {

 const { productId } = useParams();
 const [product, setProduct] = useState({});

 useEffect(() => {
  fetch(`http://localhost:5000/products/${productId}`)
   .then(res => res.json())
   .then(data => setProduct(data))
 }, [])
 return (
  <>
   <Navigation></Navigation>
   <Container>
    <Grid container spacing={2}>
     <Grid item xs={12} md={6}>
      <img style={{ width: '75%', height: '300px', margin: '25px' }} src={product.image} alt="" />
     </Grid>
     <Grid item xs={12} md={6}>
      <Typography sx={{ color: '#2E86C1', p: 3 }} variant="h2">
       {product.name}
      </Typography>

      <Typography sx={{ p: 3, color: 'gray' }} variant="h5">
       Rs. {product.price}/-
      </Typography>
      <Typography sx={{ color: 'gray', p: 3 }} variant="p">
       {product.description}
      </Typography>
      <br />
      <Button style={{ backgroundColor: '#A9CCE3', color: 'white' }} sx={{ m: 3 }} variant="contained">Buy Now!</Button>
     </Grid>
    </Grid>



   </Container>
  </>
 );
};

export default MoreDetails;
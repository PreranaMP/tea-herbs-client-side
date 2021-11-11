import React, { useEffect, useState } from 'react';
import Navigation from '../../Home/Navigation/Navigation';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';



const Products = () => {
 const [products, setProducts] = useState([]);
 useEffect(() => {
  fetch('http://localhost:5000/products')
   .then(res => res.json())
   .then(data => setProducts(data));
 }, [])
 return (
  <Box sx={{ flexGrow: 1 }}>
   <Navigation></Navigation>
   <Container>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     {
      products.map(product => <Product
       key={product._id}
       product={product}
      ></Product>)
     }
    </Grid>
   </Container>

  </Box>
 );
};

export default Products;
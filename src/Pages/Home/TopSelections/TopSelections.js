import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../../Products/Product/Product'


const TopSelections = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://infinite-coast-95568.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])
  return (
    <Container id="topSelections" sx={{ m: 5 }}>
      <Typography sx={{ m: 5, p: 5, color: '#2E86C1' }} variant="h3">Our Top Selections</Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          products.slice(0, 6).map(product => <Product
            key={product._id}
            product={product}
          ></Product>)
        }
      </Grid>
    </Container>
  );
};

export default TopSelections;
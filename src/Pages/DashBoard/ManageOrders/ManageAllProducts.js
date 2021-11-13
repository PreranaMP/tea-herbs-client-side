import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllProducts = () => {
 const [products, setProducts] = useState([])
 useEffect(() => {
  fetch('https://infinite-coast-95568.herokuapp.com/products')
   .then(res => res.json())
   .then(data => setProducts(data))
 }, [])

 const handleDelete = id => {
  const url = `https://infinite-coast-95568.herokuapp.com/products/${id}`;
  fetch(url, {
   method: 'DELETE'
  })
   .then(res => res.json())
   .then(data => {
    console.log(data);
    if (data.deletedCount) {
     const remaining = products.filter(product => product._id !== id)
     setProducts(remaining)
     alert('deleted product');
    }

   })
 }

 return (
  <Container>
   <Typography variant="h3">Manage All Orders</Typography>
   {
    products.map(product => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }} key={product._id}>
     <div><img style={{ width: '300px', height: '200px', margin: '10px' }} src={product.image} alt="" /></div>
     <div style={{ marginLeft: '20px' }}>
      <Typography sx={{ color: '#2E86C1' }} variant="h5">{product.name}</Typography>
      <Typography sx={{ color: 'gray' }} variant="h5">Rs. {product.price}/-</Typography>

      <Button onClick={() => handleDelete(product._id)} style={{ backgroundColor: 'salmon', color: 'white', margin: '15px' }} variant="contained">Delete</Button>
     </div>
    </div>)
   }
  </Container>
 );
};


export default ManageAllProducts;



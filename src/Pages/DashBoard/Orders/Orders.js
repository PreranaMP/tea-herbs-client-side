import { Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Orders = () => {
 const { user } = useAuth();
 const [orders, setOrders] = useState([])

 useEffect(() => {
  const url = `http://localhost:5000/orders?email=${user.email}`
  fetch(url)
   .then(res => res.json())
   .then(data => setOrders(data));
 }, [])

 return (
  <Container>
   <Typography variant="h2">
    Orders {orders.length}
   </Typography>
   <TableContainer component={Paper}>
    <Table sx={{}} aria-label="Orders table">
     <TableHead>
      <TableRow>
       <TableCell>Product Name</TableCell>
       <TableCell align="right">Price</TableCell>
       <TableCell align="right">Action</TableCell>

      </TableRow>
     </TableHead>
     <TableBody>
      {orders.map((row) => (
       <TableRow
        key={row._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       >
        <TableCell component="th" scope="row">
         {row.productName}
        </TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="left"><Button variant="contained">Cancel Order</Button> </TableCell>

       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </Container>
 );
};

export default Orders;
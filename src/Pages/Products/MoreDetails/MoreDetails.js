import { Alert, AlertTitle, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Home/Navigation/Navigation';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MoreDetails = () => {
  const [orderSuccess, setOrderSuccess] = useState(false)
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://infinite-coast-95568.herokuapp.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])
  const { user } = useAuth();
  const initialInfo = { displayName: user.displayName, email: user.email, phone: '', homeAddress: '' }
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  }

  const handleOrderSubmit = e => {
    // collect data from the form 
    const order = {
      ...orderInfo,
      productName: product.name,
      price: product.price,

    }
    // send to the server

    fetch('https://infinite-coast-95568.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {

          setOrderSuccess(true)
          handleClose();
        }
      })


    e.preventDefault()
  }


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Button onClick={handleOpen} style={{ backgroundColor: '#A9CCE3', color: 'white' }} sx={{ m: 3 }} variant="contained">Buy Now!</Button>
            {orderSuccess && <Alert sx={{ text: 'center' }} severity="success">
              <AlertTitle>Success</AlertTitle>
              Successfully <strong>Ordered</strong>
            </Alert>}
          </Grid>
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography style={{ textAlign: 'center' }} sx={{ color: '#2E86C1' }} id="modal-modal-title" variant="h4" component="h2">
              Shipping
            </Typography>
            <form onSubmit={handleOrderSubmit}>

              <TextField
                disabled
                sx={{ width: '100%', m: 1 }}
                id="outlined-size-small"
                defaultValue={product.name}
                size="small"
              />
              <TextField
                sx={{ width: '100%', m: 1 }}
                id="outlined-size-small"
                name="displayName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                size="small"
              />
              <TextField

                sx={{ width: '100%', m: 1 }}
                id="outlined-multiline-static"
                label="Home Address"
                name="homeAddress"
                onBlur={handleOnBlur}
                multiline
                rows={2}
                defaultValue="Home Address"
              />
              <TextField
                sx={{ width: '100%', m: 1 }}
                id="outlined-size-small"
                defaultValue={user.email}
                name="email"
                onBlur={handleOnBlur}
                size="small"
              />
              <TextField
                sx={{ width: '100%', m: 1 }}
                id="outlined-size-small"
                defaultValue="Phone"
                name="phone"
                onBlur={handleOnBlur}
                size="small"
              />
              <Button type="submit" sx={{ mt: 3 }} style={{ backgroundColor: '#A9CCE3', color: 'white' }} variant="contained">Confirm Order</Button>
            </form>

          </Box>
        </Modal>

      </Container>
    </>
  );
};

export default MoreDetails;
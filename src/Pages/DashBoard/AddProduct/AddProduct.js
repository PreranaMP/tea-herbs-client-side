import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';


const AddProduct = () => {
 const { register, handleSubmit } = useForm();

 const onSubmit = data => {
  console.log(data);

  axios.post('http://localhost:5000/products', data)
   .then(res => {
    if (res.data.insertedId) {
     alert('Product added successfully')
    }
   })
 };
 return (
  <div>
   <Typography sx={{ color: '#2E86C1' }} variant="h3">
    ADD A PRODUCT
   </Typography>

   <form onSubmit={handleSubmit(onSubmit)}>
    <TextField
     label="S.no"
     id="outlined-size-small"
     sx={{ width: '50%', m: 1 }}
     size="small"
     type="number" {...register("id")} placeholder="S.No" />
    <br />
    <TextField
     label="Name"
     id="outlined-size-small"
     sx={{ width: '50%', m: 1 }}
     size="small" {...register("name")} placeholder="Name" />
    <br />
    <TextField
     label="Description"
     multiline

     sx={{ width: '50%', m: 1 }}
     size="small" {...register("description")} placeholder="Description" />
    <br />
    <TextField
     label="Price"
     id="outlined-size-small"
     sx={{ width: '50%', m: 1 }}
     size="small"
     type="number" {...register("price")} placeholder="Price" />
    <br />
    <TextField
     label="Image url"
     id="outlined-size-small"
     sx={{ width: '50%', m: 1 }}
     size="small" {...register("image")} placeholder="Image url" />
    <br />
    <input style={{ width: '100px', height: '50px', backgroundColor: '#A9CCE3', padding: '5px', color: 'white', border: 'none' }} type="submit" />
   </form>
  </div>
 );
};

export default AddProduct;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
 const { user } = useAuth();
 const { register, handleSubmit, reset } = useForm();
 const initialInfo = { displayName: user.displayName, email: user.email, review: '' }

 const [review, setReview] = useState(initialInfo)

 const onSubmit = data => {
  console.log(data);

  axios.post('http://localhost:5000/reviews', data)
   .then(res => {
    if (res.data.insertedId) {
     alert('Review added successfully')
     reset();
    }
   })
 };


 const handleOnBlur = e => {
  const field = e.target.name;
  const value = e.target.value;
  const newInfo = { ...review };
  newInfo[field] = value;
  setReview(newInfo);
 }
 return (

  <div>
   <Typography sx={{ color: '#2E86C1' }} variant="h3">
    WRITE A REVIEW
   </Typography>
   <Typography variant="h6">
    Written by: {user.displayName}
   </Typography>
   <form onSubmit={handleSubmit(onSubmit)}>
    <TextField
     id="outlined-multiline-static"
     label="Review"
     multiline
     rows={4}
     onBlur={handleOnBlur}
     defaultValue="Your thoughts..."
     sx={{ width: '50%', m: 1 }}
     type="" {...register("review")} />
    <br />

    <br />
    <input style={{ width: '100px', height: '50px', backgroundColor: '#A9CCE3', padding: '5px', color: 'white', border: 'none' }} type="submit" />
   </form>
  </div>
 );
};

export default Review;
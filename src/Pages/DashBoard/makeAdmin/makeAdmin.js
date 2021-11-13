import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { TextField, Button, Alert, AlertTitle } from '@mui/material';



const MakeAdmin = () => {
 const [email, setEmail] = useState('');
 const [success, setSuccess] = useState(false)

 const handleOnBlur = e => {
  setEmail(e.target.value);
 }

 const handleAdminSubmit = e => {
  const user = { email };
  fetch('https://infinite-coast-95568.herokuapp.com/users/admin', {
   method: 'PUT',
   headers: {
    'content-type': 'application/json'
   },
   body: JSON.stringify(user)
  })
   .then(res => res.json())
   .then(data => {
    if (data.modifiedCount) {
     console.log(data);

     setSuccess(true)
    }

   })

  e.preventDefault()
 }
 return (
  <div>
   <Typography sx={{ color: '#2E86C1' }} variant="h3">
    Make Admin
   </Typography>
   <form onSubmit={handleAdminSubmit}>
    <TextField
     sx={{ width: '50%', m: 3 }}
     label="Email"
     type="email"
     onBlur={handleOnBlur}
     variant="outlined" />
    <br />
    <Button style={{ textDecoration: 'none', color: 'white', backgroundColor: '#A9CCE3' }} type="submit" variant="contained">Make Admin</Button>
    {success && <Alert sx={{ text: 'center' }} severity="success">
     <AlertTitle>Success</AlertTitle>
     Successfully <strong>Added Admin</strong>
    </Alert>}
   </form>

  </div>
 );
};

export default MakeAdmin;
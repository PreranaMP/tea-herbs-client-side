import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
 return (
  <footer>
   <Box style={{ backgroundColor: '#A9CCE3', paddingTop: '20px' }}>
    <Container>
     <Grid container spacing={5}>
      <Grid item xs={12} md={4}>
       <Box borderBottom={1}>
        <Typography sx={{ color: 'white', p: 3 }} variant="h6"> Help</Typography>

       </Box>
       <Box>
        <Typography sx={{ p: 1 }} variant="subtitle2">contact</Typography>

       </Box>
       <Box>
        <Typography sx={{ p: 1 }} variant="subtitle2">support</Typography>

       </Box>
       <Box>
        <Typography sx={{ p: 1 }} variant="subtitle2"> Privacy</Typography>

       </Box>
      </Grid>
      <Grid item xs={12} md={4}>
       <Box borderBottom={1}>
        <Typography sx={{ color: 'white', p: 3 }} variant="h6">Acount</Typography>

       </Box>
       <Box>
        <Typography sx={{ p: 1 }} variant="subtitle2">login</Typography>

       </Box>
       <Box>
        <Typography sx={{ p: 1 }} variant="subtitle2"> register</Typography>

       </Box>
      </Grid>
      <Grid item xs={12} md={4}>
       <Box borderBottom={1}>
        <Typography sx={{ color: 'white', p: 3 }} variant="h6">Messages</Typography>

       </Box>
       <Box>
        <Typography sx={{ p: 1 }} variant="subtitle2">Backup</Typography>

       </Box>
       <Box>
        <Typography sx={{ p: 1 }} variant="subtitle2">history</Typography>

       </Box>
       <Box>
        <Typography sx={{ p: 1 }} variant="subtitle2">Roll</Typography>

       </Box>
      </Grid>
     </Grid>
    </Container>
   </Box>
  </footer>

 );
};

export default Footer;
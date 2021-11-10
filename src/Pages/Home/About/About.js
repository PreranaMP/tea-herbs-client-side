import React from 'react';
import Grid from '@mui/material/Grid';
import farming from '../../../images/others/tea-farming.jpg';
import { Container, Typography } from '@mui/material';

const About = () => {
 return (
  <>
   <Typography sx={{ color: '#2E86C1', mb: 5 }} variant="h4">
    Why Us?
   </Typography>
   <Container>
    <Grid container spacing={2}>
     <Grid item xs={12} md={6}>
      <img src={farming} alt="" />
     </Grid>
     <Grid item xs={12} md={6}>
      <Typography sx={{ color: 'gray' }} variant="p">
       Some of the world’s best teas including the high-grade Lopchu tea is produced in Darjeeling. It's classic, delicate and has a particular sweetness to it.Traditionally the tea produced in Darjeeling was black. Today, although the Darjeeling black tea is still famous and produced in large quantities, with over 90 estates covering 17,500 hectares covering tea plantation, the production of greens, whites, and oolongs have also started. The Darjeeling green tea is especially known for its fresh organic taste and health benefits. The best Darjeeling teas are produced where the air is cold, rainfall is generous, the sun is temperate and the soil is sandy-loamy. This setup is only available at an elevation of 2500 - 5000 feet.The Darjeeling tea garden is home to many chinary plants, as well as some novel clones. But no matter what tea plant the tea comes from, the teas are immensely fragrant, perfumy and have a captivating quality to them.
      </Typography>
     </Grid>
    </Grid>
   </Container>
  </>
 );
};

export default About;
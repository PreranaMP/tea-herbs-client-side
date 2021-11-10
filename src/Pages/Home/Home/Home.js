import React from 'react';
import About from '../About/About';
import Navigation from '../Navigation/Navigation'
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
 return (
  <div>
   <Navigation></Navigation>
   <TopBanner></TopBanner>
   <About></About>
  </div>
 );
};

export default Home;
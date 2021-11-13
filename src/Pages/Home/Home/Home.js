import React from 'react';
import About from '../About/About';
import Navigation from '../Navigation/Navigation'
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';
import TopBanner from '../TopBanner/TopBanner';
import TopSelections from '../TopSelections/TopSelections';

const Home = () => {
 return (
  <div>
   <Navigation></Navigation>
   <TopBanner></TopBanner>
   <About></About>
   <TopSelections></TopSelections>
   <ReviewDisplay></ReviewDisplay>
  </div>
 );
};

export default Home;
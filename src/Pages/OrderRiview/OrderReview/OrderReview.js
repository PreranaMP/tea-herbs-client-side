import React from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Home/Navigation/Navigation';

const OrderReview = () => {
 const { productId } = useParams();
 return (
  <>
   <Navigation></Navigation>
   <h2>this is order review : {productId}</h2>
  </>
 );
};

export default OrderReview;
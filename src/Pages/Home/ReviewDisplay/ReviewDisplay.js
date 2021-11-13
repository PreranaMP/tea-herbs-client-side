import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';

const ReviewDisplay = () => {
  const { user } = useAuth()
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://infinite-coast-95568.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [])
  return (
    <div id="reviews">
      <Container>
        <Typography sx={{ m: 3, p: 3, color: '#2E86C1' }} variant="h3">Customer Reviews</Typography>
        {reviews.map(review => <Box>

          <Typography sx={{ color: '#2E86C1' }} variant="h6">{user.displayName} says</Typography>
          <TextField
            disabled
            defaultValue={review.review}
            sx={{ width: '50%', m: 1 }}
          />
        </Box>)}
      </Container>
    </div>
  );
};

export default ReviewDisplay;
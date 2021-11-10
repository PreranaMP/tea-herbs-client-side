import React from 'react';
import Navigation from '../../Home/Navigation/Navigation';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';

const products = [
 {
  id: 1,
  name: 'Black Tea',
  image: 'https://media.istockphoto.com/photos/black-tea-cup-shot-from-above-on-white-background-copy-space-picture-id1203174798?b=1&k=20&m=1203174798&s=170667a&w=0&h=Ef4VCqCWu7lfblhlV8FiVWn1LIM97pUSKEN-ZDnz28I=',
  description: 'Black tea is made from the leaves of a bush called Camellia sinensis. It has caffeine as well as other stimulants and antioxidants. Lots of people in the U.S. drink it either hot or cold. It should always be steeped in hot water before it is cooled.',
  price: 100,
 },
 {
  id: 2,
  name: 'White Tea',
  image: 'https://media.istockphoto.com/photos/cup-of-white-tea-with-dry-leaves-picture-id116596831?b=1&k=20&m=116596831&s=170667a&w=0&h=acZCN_Quh9OpVgevW9yjrqgrnsL7phQ4q7Ot82htxqw=',
  description: 'White tea is a delicate, minimally processed tea that is highly sought after by connoisseurs and enjoyed by experts and novices alike. White tea has a light body and a mild flavor with a crisp, clean finish. ',
  price: 170,
 },
 {
  id: 3,
  name: 'Oolong Tea',
  image: 'https://media.istockphoto.com/photos/fresh-taiwan-oolong-tea-and-cup-picture-id1097216054?b=1&k=20&m=1097216054&s=170667a&w=0&h=gfDOTHvOGtSxAAJ05ulSH9PqCBZ46p6z5V0fQb5kOXY=',
  description: 'Oolong is a partially oxidized tea, it is between black and green teas in terms of oxidation. Oolong teas can range from around 10-80% oxidation, and can brew up anywhere from a pale yellow to a rich amber cup of tea. ',
  price: 200,
 },
 {
  id: 4,
  name: 'Green tea',
  image: 'https://images.unsplash.com/photo-1622480916113-9000ac49b79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
  description: 'Green tea is another type of tea made from the camellia sinensis plant. Green teas often brew up a light green or yellow color, and tend to have a lighter body and milder taste.They contain about half as much caffeine as black tea.',
  price: 150,
 },
 {
  id: 5,
  name: 'Cha',
  image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
  description: 'With a blend of black tea, ginger, cloves, cardamom and cinnamon, our chai is a beautiful balance of smooth and spicy. The bold spiciness of ginger and strong sweetness of clove shine through, but the spices dont overshadow our full-bodied black tea leaves.',
  price: 230,
 },
 {
  id: 6,
  name: 'Purple Tea',
  image: 'https://media.istockphoto.com/photos/purple-ceramic-cup-of-hot-black-coffee-isolated-on-white-picture-id1296506145?b=1&k=20&m=1296506145&s=170667a&w=0&h=c2E1MzEygYoOdK6m7a7CjRerlXw7ziCzZ7mg3iUSAcY=',
  description: 'Purple tea is a relatively new kind of tea, and has only been commercially available for a few years. The tea is produced from a rare purple-leaved tea plant found growing wild in the Assam region of India. ',
  price: 180,
 },
 {
  id: 7,
  name: 'Matcha',
  image: 'https://images.unsplash.com/photo-1582793571721-3102c6c922a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  description: 'Matcha is a type of powdered green tea popular in Japan. It can be consumed on its own when whisked with water, and can also be added to lattes,and baked goods.Matcha has a smooth, rich flavor with notes of umami and just a hint of bitterness.',
  price: 150,
 },
 {
  id: 8,
  name: 'Pu-Erh',
  image: 'https://images.unsplash.com/photo-1627828094826-0055dc83ed3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80',
  description: 'Pu-erh tea is an aged, partially fermented tea that is similar to black tea in character. Pu-erh teas brew up an inky brown-black color and have a full body with a rich, earthy, and deeply satisfying taste. ',
  price: 230,
 },
 {
  id: 9,
  name: 'Herbal Tea',
  image: 'https://images.unsplash.com/photo-1504382103100-db7e92322d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVyYmFsJTIwdGVhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
  description: 'Although we colloquially call herbal teas “tea,” they’re not actually related to true teas made from the camellia sinensis plant. Instead, herbal teas are composed of a blend of different herbs and spices.',
  price: 140,
 },
 {
  id: 10,
  name: 'Mate',
  image: 'https://images.unsplash.com/photo-1516638352197-2a528822bf6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80',
  description: 'Mate is a tea-like drink made from a plant native to South America. Although mate is not related to the camellia sinensis tea plant, it does contain caffeine. Mate is traditionally prepared in a hollow gourd ',
  price: 220,
 },
]

const Products = () => {
 return (
  <Box sx={{ flexGrow: 1 }}>
   <Navigation></Navigation>
   <Container>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     {
      products.map(product => <Product
       key={product.id}
       product={product}
      ></Product>)
     }
    </Grid>
   </Container>
  </Box>
 );
};

export default Products;
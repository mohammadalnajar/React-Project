import { Button, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartItem } from '../../components/ShoppingCartItem';
import { GlobalContext } from '../../context/global/GlobalContext';

export const ShoppingCartList = () => {
  const { shoppingCartItems } = useContext(GlobalContext);
  const totalPrice = shoppingCartItems
    .map((item) => {
      return item.price * item.count;
    })
    .reduce((a, b) => a + b);
  console.log(totalPrice);
  return (
    <>
      <Grid container>
        <Grid container item xs={12}>
          {shoppingCartItems.length > 1 ? (
            shoppingCartItems.map((item) => (
              <ShoppingCartItem key={item._id} item={item} />
            ))
          ) : (
            <p>Your Cart is empty</p>
          )}
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            {' '}
            Total:${totalPrice}
          </Grid>
        </Grid>
        <Grid container justifyContent='flex-end' item xs={12}>
          <Grid item>
            <Link to='cart'>
              <Button>Show cart Page</Button>{' '}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

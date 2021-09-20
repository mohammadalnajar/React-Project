import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from '../../components/LoginButton';
import { PayButton } from '../../components/PayButton';
import { ShoppingCartItem } from '../../components/ShoppingCartItem';
import { GlobalContext } from '../../context/global/GlobalContext';

export const ShoppingCartList = ({ page }) => {
  const { shoppingCartItems, status } = useContext(GlobalContext);
  const totalPrice = shoppingCartItems
    .map((item) => {
      return item.price * item.quantity;
    })
    .reduce((a, b) => a + b);

  return (
    <>
      <Grid container>
        <Grid container item xs={12}>
          {shoppingCartItems[0]._id.length !== 0 ? (
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
        <Grid container justifyContent='center' item xs={12}>
          <Grid item>
            {page === 'SmallShoppingCart' ? (
              <Link to='cart'>
                <Button>Go to Checkout</Button>
              </Link>
            ) : status.loggedIn ? (
              <PayButton />
            ) : (
              <LoginButton page={page} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

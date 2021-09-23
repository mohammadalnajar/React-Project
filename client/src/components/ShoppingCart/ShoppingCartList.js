import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from '../LoginButton';
import { PayButton } from '../PayButton';
import { ShoppingCartItem } from './ShoppingCartItem';
import { GlobalContext } from '../../context/global/GlobalContext';
import '../../Styles/ShoppingCart.css';
export const ShoppingCartList = ({ page }) => {
  const { shoppingCartItems, status } = useContext(GlobalContext);
  const totalPrice = shoppingCartItems
    .map((item) => {
      return item.price * item.quantity;
    })
    .reduce((a, b) => a + b);

  return (
    <>
      <Grid container justifyContent='center' className='cart-item'>
        <Grid container item xs={12} justifyContent='center'>
          {/* check if cart not empty */}
          {shoppingCartItems[0]._id.length !== 0 ? (
            <>
              {shoppingCartItems.map((item) => (
                <ShoppingCartItem key={item._id} item={item} />
              ))}
              <Grid container item xs={12} className='total'>
                <Grid item xs={4}></Grid>
                <Grid item xs={8} container justifyContent='flex-start'>
                  <Grid item xs={3} container justifyContent='flex-start'>
                    Total:
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    container
                    className='price'
                    justifyContent='flex-start'
                  >
                    ${totalPrice}
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justifyContent='center' item xs={12}>
                <Grid item container justifyContent='center'>
                  {/* check if we are in small cart tooltip */}
                  {page === 'SmallShoppingCart' ? (
                    <Grid item xs={12}>
                      <Link to='cart'>
                        <button className='checkout-btn'>Go to Checkout</button>{' '}
                      </Link>
                    </Grid>
                  ) : status.loggedIn && page === 'CheckOutPage' ? (
                    <>
                      <Grid item xs={12} container justifyContent='center'>
                        <Grid item container justifyContent='center' xs={12}>
                          <PayButton />
                        </Grid>

                        <Grid item container justifyContent='center' xs={12}>
                          For Testing
                          <br /> card: 4242 4242 4242 4242 <br /> cvc: 424
                        </Grid>
                      </Grid>
                    </>
                  ) : (
                    <LoginButton page={page} />
                  )}
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                item
                xs={12}
                container
                justifyContent='center'
                className='my-4'
              >
                <Grid item container justifyContent='center' xs={12}>
                  <p>Your Cart is empty</p>
                </Grid>
                <Grid item container justifyContent='center' xs={12}>
                  {page === 'CheckOutPage' ? (
                    <Link to='/shop'>
                      <button className='checkout-btn'>Go to shop</button>
                    </Link>
                  ) : (
                    <Grid item xs={12}>
                      <Link to='/cart'>
                        <button className='checkout-btn'>Go to Checkout</button>
                      </Link>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { GlobalContext } from '../context/global/GlobalContext';
export const ShoppingCartItem = ({ item }) => {
  const { delItemCart } = useContext(GlobalContext);
  return (
    <>
      {item.quantity > 0 && (
        <Grid item xs={12} className='cart-item'>
          <Grid container className='my-3'>
            <Grid container justifyContent='center' item xs={4}>
              <img src={item.imageUrl} alt='' style={{ maxHeight: '100px' }} />
            </Grid>
            <Grid item container xs={8} className='px-2'>
              <Grid item xs={12}>
                {item.name} {item.storage}
              </Grid>
              <Grid item container alignItems='center' xs={12}>
                <Grid item xs={6} container justifyContent='space-between'>
                  <Grid item xs={12} md={6}>
                    Price:
                  </Grid>
                  <Grid item xs={12} className='price' md={6}>
                    ${item.price}
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-between' item xs={3}>
                  <Grid item xs={12}>
                    Quantity:
                  </Grid>
                  <Grid item xs={3}>
                    {item.quantity}
                  </Grid>
                </Grid>
                <Grid container justifyContent='center' item xs={3}>
                  <IconButton
                    onClick={() => delItemCart(item)}
                    aria-label='delete'
                    size='small'
                  >
                    <DeleteIcon fontSize='small' />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

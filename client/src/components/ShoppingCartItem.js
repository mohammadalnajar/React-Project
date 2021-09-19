import { Grid } from '@material-ui/core';
import React from 'react';

export const ShoppingCartItem = ({ item }) => {
  return (
    <>
      {item.count > 0 && (
        <Grid item xs={12}>
          <Grid container className='m-2'>
            <Grid container justifyContent='center' item xs={4}>
              <img src={item.imageUrl} alt='' style={{ maxWidth: '40%' }} />
            </Grid>
            <Grid item container xs={8}>
              <Grid item xs={12}>
                {item.name} {item.storage}
              </Grid>
              <Grid item container xs={12}>
                <Grid item xs={6}>
                  ${item.price}
                </Grid>
                <Grid item xs={6}>
                  {item.count}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

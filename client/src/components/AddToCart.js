import React, { useContext } from 'react';
import { GlobalContext } from '../context/global/GlobalContext';
import { Grid } from '@material-ui/core';

export const AddToCart = ({ device }) => {
  const { addItemToCart } = useContext(GlobalContext);
  const {
    _id,
    name,
    imageUrl,
    price,
    specs: {
      memory: { storage },
    },
  } = device;
  const item = {
    _id,
    name,
    imageUrl,
    price,
    storage: storage[0],
    quantity: 1,
  };
  return (
    <>
      <Grid item xs={12}>
        <button className='add-btn' onClick={() => addItemToCart(item)}>
          Add to Cart
        </button>
      </Grid>
    </>
  );
};

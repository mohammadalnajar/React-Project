import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/global/GlobalContext';
export const PayButton = () => {
  const { shoppingCartItems } = useContext(GlobalContext);
  const paymentHandle = () => {
    console.log(shoppingCartItems[0]._id.length);
  };
  return (
    <>
      <Button
        onClick={() => paymentHandle()}
        className='my-5'
        variant='contained'
        color='success'
      >
        Pay with credit card
      </Button>
    </>
  );
};

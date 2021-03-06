import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/global/GlobalContext';
export const PayButton = () => {
  const { shoppingCartItems } = useContext(GlobalContext);

  const paymentHandle = async () => {
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(shoppingCartItems),
      });
      const { url } = await response.json();
      window.location = url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={() => paymentHandle()} className='my-3 pay-btn'>
        Pay with credit card
      </button>
    </>
  );
};

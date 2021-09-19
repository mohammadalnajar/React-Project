import React from 'react';
import { ShoppingCartList } from '../containers/ShoppingCart/ShoppingCartList';
import { Nav } from '../components/Nav';
export const CheckOutPage = () => {
  return (
    <>
      <Nav />
      <ShoppingCartList page='CheckOutPage' />
    </>
  );
};

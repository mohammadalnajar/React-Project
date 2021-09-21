import React from 'react';
import { ShoppingCartList } from '../containers/ShoppingCart/ShoppingCartList';
import { Header } from '../components/Header';

export const CheckOutPage = () => {
  return (
    <>
      <Header page='CheckOutPage' />
      <ShoppingCartList page='CheckOutPage' />
    </>
  );
};

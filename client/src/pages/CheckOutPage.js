import React from 'react';
import { ShoppingCartList } from '../containers/ShoppingCart/ShoppingCartList';
import { Header } from '../components/Header';
import { Grid } from '@material-ui/core';

export const CheckOutPage = () => {
  return (
    <>
      <Header page='CheckOutPage' />
      <Grid style={{ paddingBottom: '70px' }}>
        <ShoppingCartList page='CheckOutPage' />
      </Grid>
    </>
  );
};

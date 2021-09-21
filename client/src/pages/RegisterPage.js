import { Grid } from '@material-ui/core';
import React from 'react';
import { Header } from '../components/Header';
import { RegisterForm } from '../components/RegisterForm';

export const RegisterPage = () => {
  return (
    <>
      <Header page='RegisterPage' />
      <Grid container item xs={12} justifyContent='center' className='my-5'>
        <RegisterForm />
      </Grid>
    </>
  );
};

import React, { useContext } from 'react';
import { Header } from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import { GlobalContext } from '../context/global/GlobalContext';
import { Grid } from '@material-ui/core';

export const LoginPage = () => {
  const { loginHandler, user, status, resetError } = useContext(GlobalContext);
  return (
    <>
      <Header page='LoginPage' />
      <Grid container item xs={12} justifyContent='center' className='my-5'>
        <LoginForm
          loginHandler={loginHandler}
          user={user}
          status={status}
          resetError={resetError}
        />
      </Grid>
    </>
  );
};

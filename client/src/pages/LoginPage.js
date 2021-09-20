import React, { useContext } from 'react';
import { LoginForm } from '../components/LoginForm';
import { GlobalContext } from '../context/global/GlobalContext';

export const LoginPage = () => {
  const { loginHandler, user, status, resetError } = useContext(GlobalContext);
  return (
    <LoginForm
      loginHandler={loginHandler}
      user={user}
      status={status}
      resetError={resetError}
    />
  );
};

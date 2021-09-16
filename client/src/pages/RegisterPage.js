import React from 'react';
import { Container } from 'react-bootstrap';
import { RegisterForm } from '../components/RegisterForm';

export const RegisterPage = () => {
  return (
    <Container className='mt-5'>
      <RegisterForm />
    </Container>
  );
};

import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { RegisterDoneModal } from './RegisterDoneModal';

export const RegisterForm = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const registerUser = async (e, firstName, lastName, email, password) => {
    e.preventDefault();
    const registeredUser = { firstName, lastName, email, password };
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(registeredUser),
      });
      const user = await response.json();
      if (user.email) {
        setModalShow(true);
        setFName('');
        setLName('');
        setEmail('');
        setPassword('');
      }
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={(e) => registerUser(e, fName, lName, email, password)}>
        <Form.Group className='mb-3'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={(e) => setFName(e.target.value)}
            type='text'
            placeholder='Enter Your first name'
            value={fName}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>last Name</Form.Label>
          <Form.Control
            onChange={(e) => setLName(e.target.value)}
            type='text'
            placeholder='Enter Your last name'
            value={lName}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Enter email'
            value={email}
            required
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            value={password}
            required
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <p>
          Have you already an Account? <Link to='/login'> log in </Link>
        </p>
      </Form>

      <RegisterDoneModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setRegistered(true);
        }}
      />
      {registered && <Redirect to='/login' />}
    </>
  );
};

import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { RegisterDoneModal } from './RegisterDoneModal';
import { GlobalContext } from '../context/global/GlobalContext';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
import '../Styles/RegisterForm.css';
export const RegisterForm = () => {
  const { resetError } = useContext(GlobalContext);

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
  useEffect(() => {
    resetError();
  }, []);
  const { location } = useHistory();

  return (
    <>
      <Grid
        className='register-form'
        item
        xs={6}
        onSubmit={(e) => registerUser(e, fName, lName, email, password)}
        container
        justifyContent='center'
      >
        <Grid container justifyContent='center' item xs={12}>
          <TextField
            required
            onChange={(e) => setFName(e.target.value)}
            value={fName}
            id='standard-required'
            label='Enter Your first name'
            variant='standard'
          />
        </Grid>
        <Grid container justifyContent='center' item xs={12}>
          <TextField
            required
            onChange={(e) => setLName(e.target.value)}
            value={lName}
            id='standard-required'
            label='Enter Your last name'
            variant='standard'
          />
        </Grid>
        <Grid container justifyContent='center' item xs={12}>
          <TextField
            required
            id='standard-required'
            label='Email'
            variant='standard'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid container justifyContent='center' item xs={12}>
          <TextField
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id='standard-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='standard'
          />
        </Grid>
        <Grid container justifyContent='center' item xs={6}>
          <button className='register-btn' type='submit'>
            Register
          </button>
        </Grid>
        <Grid container justifyContent='center' item xs={12}>
          <p>
            Have you already an Account?{' '}
            <Link
              to={{
                pathname: '/login',
                state: { from: location.pathname },
              }}
            >
              {' '}
              Log in{' '}
            </Link>
          </p>
        </Grid>
      </Grid>

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

import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, Redirect } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';
import '../Styles/LoginForm.css';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
export const LoginForm = ({ loginHandler, status, resetError }) => {
  //* START alert logic
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {
    if (status.success === false) {
      handleClick();
    }
  }, [status]);
  //* END Alert logic

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localStatus, setLocalStatus] = useState(false);

  const submitForm = async (e) => {
    const res = await loginHandler(e, email, password);
    console.log(res, 'in submit form');
    if (res.loggedIn) {
      setLocalStatus(true);
    } else {
      setLocalStatus(false);
    }
  };

  //* to know from which path is the user coming from
  const {
    location: {
      state: { from },
    },
  } = useHistory();
  console.log(from);
  return (
    <>
      <Grid
        className='login-form'
        item
        xs={6}
        container
        justifyContent='center'
      >
        <Grid container justifyContent='center' item xs={12}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            id='standard-required'
            label='Email Address'
            autoComplete='email'
          />
        </Grid>
        <Grid container justifyContent='center' item xs={12}>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            label='Password'
            id='standard-required'
            autoComplete='new-password'
          />
        </Grid>
        <Grid container justifyContent='center' item xs={6}>
          <button onClick={(e) => submitForm(e)} className='login-btn'>
            Log in
          </button>
        </Grid>
        <Grid container justifyContent='center' item xs={12}>
          <Link to='/register'>Not Registered yet? Sign up</Link>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {status.msg}
        </Alert>
      </Snackbar>
      {localStatus && <Redirect to={from === '/register' ? '/' : from} />}
    </>
  );
};

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

  // to know from which path is the user coming from
  const {
    history: {
      location: {
        state: { from },
      },
    },
  } = useHistory();

  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={(e) => submitForm(e)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              className='my-3'
            >
              Sign in
            </Button>
            <Grid container justifyContent='center'>
              <Grid item>
                <Link to='/register'>Not Registered yet? Sign up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {status.msg}
        </Alert>
      </Snackbar>
      {localStatus && <Redirect to={from} />}
    </div>
  );
};

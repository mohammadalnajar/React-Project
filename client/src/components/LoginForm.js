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
import { Link } from 'react-router-dom';
import { AlertModal } from './AlertModal';

export const LoginForm = ({ loginHandler, status, resetError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const handleOpen = () => setOpenAlertModal(true);
  const handleClose = () => {
    setOpenAlertModal(false);
    resetError();
  };
  useEffect(() => {
    if (status.loggedIn === false) {
      handleOpen();
    }
  }, [status]);

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
          <Box
            component='form'
            onSubmit={(e) => loginHandler(e, email, password)}
            sx={{ mt: 3 }}
          >
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
              sx={{ mt: 5, mb: 2 }}
            >
              Sign in
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link to='/'>Not Registered yet? Sign up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
      <AlertModal
        open={openAlertModal}
        handleClose={handleClose}
        alertMessage={status.msg}
      />
    </div>
  );
};

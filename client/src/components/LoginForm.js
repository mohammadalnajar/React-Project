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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export const LoginForm = ({ loginHandler, status, resetError }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const handleOpen = () => setOpenAlertModal(true);
  // const handleClose = () => {
  //   setOpenAlertModal(false);
  //   resetError();
  // };
  useEffect(() => {
    if (status.success === false) {
      // handleOpen();
      handleClick();
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
      </Container>
      {/* <AlertModal
        open={openAlertModal}
        handleClose={handleClose}
        alertMessage={status.msg}
      /> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {status.msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

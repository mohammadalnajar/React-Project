import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const LoginButton = ({ classes }) => {
  return (
    <>
      <Link to='/login' className={classes.link}>
        <Button
          onClick={() => console.log('login')}
          className={classes.btn}
          startIcon={<LoginIcon />}
        >
          Log in
        </Button>
      </Link>
    </>
  );
};

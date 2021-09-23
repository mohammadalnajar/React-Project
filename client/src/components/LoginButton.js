import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from '../Styles/ClassesForStyles';
import { useHistory } from 'react-router-dom';
export const LoginButton = ({ page }) => {
  const classes = useStyles();
  const { location } = useHistory();
  return (
    <>
      {location.pathname === '/login' ? (
        ''
      ) : (
        <Link
          to={{
            pathname: '/login',
            state: { from: location.pathname },
          }}
          className={classes.link}
        >
          {location.pathname === '/cart' && page === 'CheckOutPage' ? (
            <button className='login-checkout' startIcon={<LoginIcon />}>
              Please Login to Pay
            </button>
          ) : (
            <Button className={`${classes.btn} btn`} startIcon={<LoginIcon />}>
              Log in
            </Button>
          )}
        </Link>
      )}
    </>
  );
};

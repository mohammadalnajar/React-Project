import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from '../Styles/ClassesForStyles';
import { useHistory } from 'react-router-dom';
export const LoginButton = ({ page }) => {
  const classes = useStyles();
  const { location } = useHistory();
  console.log(location);
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
          <Button className={`${classes.btn} btn`} startIcon={<LoginIcon />}>
            {location.pathname === '/cart' && page === 'CheckOutPage'
              ? 'Please Login to Pay'
              : 'Log in'}
          </Button>
        </Link>
      )}
    </>
  );
};

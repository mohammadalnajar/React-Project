import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from '../Styles/ClassesForStyles';
import { useHistory } from 'react-router-dom';
export const LoginButton = ({ page }) => {
  const classes = useStyles();
  const { location } = useHistory();
  console.log(location);
  return (
    <>
      <Grid className='my-4'>
        <Link to='/login' className={classes.link}>
          <Button className={classes.btn} startIcon={<LoginIcon />}>
            {location.pathname === '/cart' && page === 'CheckOutPage'
              ? 'Please Login to Pay'
              : 'Log in'}
          </Button>
        </Link>
      </Grid>
    </>
  );
};

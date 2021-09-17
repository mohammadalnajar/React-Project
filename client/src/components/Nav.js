import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { ShoppingCart } from './ShoppingCart';

export const Nav = (props) => {
  const useStyles = makeStyles({
    nav: {
      backgroundColor: 'red',
      //   color: (props) => props.color,
    },
    dFlex: {
      display: 'flex',
      alignItems: 'center',
    },
  });
  const classes = useStyles(props);
  return (
    <div>
      <nav className={classes.nav}>
        <Grid container alignItems='center'>
          <Grid container justifyContent='center' item xs={2}>
            Home
          </Grid>
          <Grid container justifyContent='center' item xs={2}>
            Contact
          </Grid>
          <Grid container justifyContent='center' item xs={2}>
            Shop
          </Grid>
          <Grid item container xs={6} justifyContent='flex-end'>
            <Grid item xs={6} container justifyContent='flex-end'>
              <Button variant='primary' startIcon={<LoginIcon />}>
                Log out
              </Button>
            </Grid>
            <Grid
              item
              container
              justifyContent='flex-end'
              className='p-2'
              xs={2}
            >
              <ShoppingCart />
            </Grid>
          </Grid>
        </Grid>
      </nav>
    </div>
  );
};

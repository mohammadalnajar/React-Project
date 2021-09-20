import { Grid, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { ShoppingCart } from './ShoppingCart';
import { Link } from 'react-router-dom';
import { LogoutButton } from './LogoutButton';
import { LoginButton } from './LoginButton';
import { GlobalContext } from '../context/global/GlobalContext';
import { useStyles } from '../Styles/ClassesForStyles';

export const Nav = () => {
  console.log('in the nav');
  const { status } = useContext(GlobalContext);
  const classes = useStyles();
  return (
    <Grid container>
      <Grid alignItems='center' container justifyContent='center' item xs={2}>
        <Link to='/' className={classes.link}>
          <Button className={classes.btn}>Home</Button>
        </Link>
      </Grid>
      <Grid container alignItems='center' justifyContent='center' item xs={2}>
        <Link className={classes.link} to='Shop'>
          <Button className={classes.btn}>Shop</Button>
        </Link>
      </Grid>
      <Grid item container xs={8} justifyContent='flex-end'>
        <Grid
          item
          xs={6}
          container
          alignItems='center'
          justifyContent='flex-end'
        >
          {status.loggedIn ? (
            <LogoutButton classes={classes} />
          ) : (
            <LoginButton classes={classes} />
          )}
        </Grid>
        <Grid item container justifyContent='flex-end' className='p-2' xs={2}>
          <ShoppingCart />
        </Grid>
      </Grid>
    </Grid>
  );
};

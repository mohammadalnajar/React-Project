import { Grid, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';
import { Link } from 'react-router-dom';
import { LogoutButton } from './LogoutButton';
import { LoginButton } from './LoginButton';
import { GlobalContext } from '../context/global/GlobalContext';
import { useStyles } from '../Styles/ClassesForStyles';
import '../Styles/Nav.css';
export const Nav = () => {
  const { status } = useContext(GlobalContext);
  const classes = useStyles();
  return (
    <Grid container className='nav'>
      <Grid item xs={4}>
        <ul className='nav-list'>
          <li>
            <Link to='/' className={classes.link}>
              <Button className={`${classes.btn} btn`}>Home</Button>
            </Link>
          </li>
          <li>
            <Link className={classes.link} to='Shop'>
              <Button className={`${classes.btn} btn`}>Shop</Button>
            </Link>
          </li>
        </ul>
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

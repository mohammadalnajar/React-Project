import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
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
          <Grid xs={3}>Home</Grid>
          <Grid xs={3}>Contact</Grid>
          <Grid xs={3}>Shop</Grid>
          <Grid xs={3}>
            <Button variant='primary' startIcon={<LoginIcon />}>
              Log in
            </Button>
          </Grid>
        </Grid>
      </nav>
    </div>
  );
};

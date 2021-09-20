import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const LogoutButton = ({ classes }) => {
  return (
    <>
      <Button
        onClick={() => console.log('logout')}
        className={classes.btn}
        startIcon={<LogoutIcon />}
      >
        Log out
      </Button>
    </>
  );
};

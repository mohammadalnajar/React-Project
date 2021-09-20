import React, { useContext } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@material-ui/core';
import { GlobalContext } from '../context/global/GlobalContext';

export const LogoutButton = ({ classes }) => {
  const { logoutHandler } = useContext(GlobalContext);
  return (
    <>
      <Button
        onClick={() => logoutHandler()}
        className={classes.btn}
        startIcon={<LogoutIcon />}
      >
        Log out
      </Button>
    </>
  );
};

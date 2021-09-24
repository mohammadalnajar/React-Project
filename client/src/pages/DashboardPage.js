import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/global/GlobalContext';
import { ShopPage } from './ShopPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export const DashboardPage = () => {
  const { getDevices, devices } = useContext(GlobalContext);
  const theme = createTheme();
  useEffect(() => {
    getDevices();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <ShopPage devicesGlobal={devices} />
      </ThemeProvider>
    </>
  );
};

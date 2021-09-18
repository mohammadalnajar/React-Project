import React, { useContext, useEffect } from 'react';
import { Nav } from '../components/Nav';
import { GlobalContext } from '../context/global/GlobalContext';
import { ShopPage } from './ShopPage';

export const DashboardPage = () => {
  const { getDevices, devices } = useContext(GlobalContext);
  useEffect(() => {
    getDevices();
  }, []);
  console.log(devices, 'devices in dash');
  return (
    <>
      <Nav />
      <ShopPage devicesGlobal={devices} />
    </>
  );
};

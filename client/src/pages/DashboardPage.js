import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/global/GlobalContext';
import { ShopPage } from './ShopPage';

export const DashboardPage = () => {
  const { getDevices, devices } = useContext(GlobalContext);
  useEffect(() => {
    getDevices();
  }, []);
  return (
    <>
      <ShopPage devicesGlobal={devices} />
    </>
  );
};

import React, { useContext, useEffect } from 'react';
import { Nav } from '../components/Nav';
import { GlobalContext } from '../context/global/GlobalContext';

export const DashboardPage = () => {
  const { getDevices } = useContext(GlobalContext);
  useEffect(() => {
    getDevices();
  }, []);
  return <Nav />;
};

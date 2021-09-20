import React, { useContext, useEffect } from 'react';
import { Nav } from '../components/Nav';
import { GlobalContext } from '../context/global/GlobalContext';

export const SuccessPage = () => {
  const { resetCartItems } = useContext(GlobalContext);
  useEffect(() => {
    resetCartItems();
  }, []);
  return (
    <>
      <Nav />
      <h1>Success page</h1>
    </>
  );
};

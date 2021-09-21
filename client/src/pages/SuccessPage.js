import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/global/GlobalContext';
import { Header } from '../components/Header';
import '../Styles/success.css';
import { Grid } from '@material-ui/core';
export const SuccessPage = () => {
  const { resetCartItems } = useContext(GlobalContext);
  useEffect(() => {
    resetCartItems();
  }, []);
  return (
    <>
      <Header page='SuccessPage' />
      <Grid container justifyContent='center'>
        <Grid
          item
          container
          justifyContent='center'
          xs={12}
          className='success-msg'
        >
          Your payment is Successfully received
        </Grid>
        <Grid item xs={12}>
          <div className='main-container'>
            <div className='check-container'>
              <div className='check-background'>
                <svg
                  viewBox='0 0 65 51'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 25L27.3077 44L58.5 7'
                    stroke='white'
                    strokeWidth='13'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div className='check-shadow'></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

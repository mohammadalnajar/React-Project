import React from 'react';
import { makeStyles } from '@mui/styles';
import notFound from '../assets/not-found-img.jpg';
import iphone13proImage from '../assets/iphone13pro.png';
import { AddToCart } from './AddToCart';
import { Grid } from '@material-ui/core';

export const DeviceItem = ({ device }) => {
  const useStyles = makeStyles({
    container: {
      border: '2px solid black',
      width: '80%',
      margin: '20px 10px 20px auto',
      display: 'flex',
      flexWrap: 'wrap',
    },
    dFlex: {
      display: 'flex',
      alignItems: 'center',
    },
    deviceContainer: {
      borderRadius: '5px',
      backgroundColor: '#EEEEEE',
    },
  });
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Grid className={`${classes.deviceContainer} m-2  p-2`}>
        <Grid container alignItems='stretch'>
          <Grid item xs={12} container justifyContent='center'>
            <img src={iphone13proImage} alt='not found' width='100px' />
          </Grid>
          <Grid justifyContent='center' container item>
            <Grid justifyContent='center' container item xs={8}>
              {device.name}
            </Grid>
            <Grid item xs={4}>
              {device.specs.memory.storage[0]}
            </Grid>
            <Grid item>${device.price}-</Grid>
          </Grid>
          <Grid justifyContent='flex-end' className={'m-2'} container item>
            <AddToCart />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

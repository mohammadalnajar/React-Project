import React from 'react';
import { makeStyles } from '@mui/styles';
import { AddToCart } from './AddToCart';
import { Grid } from '@material-ui/core';

export const DeviceItem = ({ device }) => {
  const useStyles = makeStyles({
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
            <img src={device.imageUrl} alt='not found' width='100px' />
          </Grid>
          <Grid justifyContent='center' container item>
            <Grid justifyContent='center' container item xs={12}>
              {device.name}
            </Grid>
            <Grid justifyContent='center' container item xs={12}>
              {device.specs.memory.storage[0]}
            </Grid>
            <Grid item>${device.price}-</Grid>
          </Grid>
          <Grid justifyContent='flex-end' className={'m-2'} container item>
            <AddToCart device={device} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

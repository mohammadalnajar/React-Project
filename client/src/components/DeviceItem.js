import React from 'react';
import { AddToCart } from './AddToCart';
import { Grid } from '@material-ui/core';
import { useStyles } from '../Styles/ClassesForStyles';
import '../Styles/DeviceItem.css';
import { InfoToolTip } from './InfoToolTip';
export const DeviceItem = ({ device }) => {
  const classes = useStyles();
  return (
    <Grid className='device' item xs={12} md={6} lg={4}>
      <Grid className={`${classes.deviceContainer} m-2  p-2`}>
        <Grid container style={{ minHeight: '330px' }}>
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
            <Grid className='device-price' item>
              ${device.price}-
            </Grid>
          </Grid>
          <Grid justifyContent='flex-end' className={'m-2'} container item>
            <AddToCart
              text='Add to Cart'
              device={device}
              classNameStyle='add-btn'
              bgColor='#57aee4'
              textColor='#FFFFFF'
            />
          </Grid>
          <InfoToolTip title='add'>
            <button className='info-tool-tip'>info</button>
          </InfoToolTip>
        </Grid>
      </Grid>
    </Grid>
  );
};

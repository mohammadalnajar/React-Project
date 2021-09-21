import { Grid } from '@material-ui/core';
import React from 'react';
import { AddToCart } from './AddToCart';
import '../Styles/ShowModel.css';
export const ShowModel = ({
  priColor,
  secColor,
  thrColor,
  imageUrl,
  device,
}) => {
  return (
    <>
      <Grid
        justifyContent='space-around'
        container
        item
        xs={12}
        style={{
          backgroundColor: priColor,
          color: secColor,
          maxHeight: '300px',
        }}
        className='show-model px-5'
      >
        <Grid
          item
          xs={6}
          container
          className='p-3'
          style={{ maxHeight: '300px', maxWidth: '80%' }}
        >
          <Grid item xs={12} container>
            <Grid item xs={12}>
              {' '}
              <ul className='show-model-list'>
                <li style={{ color: thrColor }}>{device.brand}</li>
                <li>
                  {device.name} {device.specs.memory.storage[0]}
                </li>
              </ul>
            </Grid>
            <Grid item xs={12}>
              <ul style={{ color: thrColor }} className='specs-list'>
                <li>Screen: {device.specs.display.size}</li>
                <li>Ram: {device.specs.memory.ram} </li>
                <li>Camera: {device.specs.camera.main}</li>
              </ul>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <AddToCart
              text='Order Now'
              device={device}
              classNameStyle='order-btn'
              bgColor={secColor}
              textColor=''
            />
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ maxHeight: '300px' }}>
          <img
            className='py-3'
            src={imageUrl}
            alt=''
            width='auto'
            style={{ maxHeight: '300px' }}
          />
        </Grid>
      </Grid>
    </>
  );
};

import React from 'react';
import { DeviceItem } from '../components/DeviceItem';
import { Grid } from '@material-ui/core';

export const ShopPage = ({ devices }) => {
  return (
    <Grid container justifyContent='flex-end'>
      {devices.length > 1 &&
        devices.map((device) => {
          return <DeviceItem key={device._id} device={device} />;
        })}
    </Grid>
  );
};

import React from 'react';
import { DeviceItem } from '../components/DeviceItem';
import { Grid } from '@material-ui/core';
import { SearchBar } from '../components/SearchBar';

export const ShopPage = ({ devices }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid container item xs={9}>
          <Grid container item xs={12} alignItems='flex-start'>
            <SearchBar devices={devices} />
          </Grid>
          <Grid item container justifyContent='space-between'>
            {devices.length > 1 &&
              devices.map((device) => {
                return <DeviceItem key={device._id} device={device} />;
              })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

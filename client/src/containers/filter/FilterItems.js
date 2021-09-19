import { Grid } from '@material-ui/core';
import React from 'react';
import { BrandFilter } from './BrandFilter';
import { OsFilter } from './OsFilter';
import { PriceFilter } from './PriceFilter';

export const FilterItems = ({ devices, setDevices, devicesGlobal }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <BrandFilter
            devices={devices}
            setDevices={setDevices}
            devicesGlobal={devicesGlobal}
          />
        </Grid>
        <Grid item xs={12}>
          <OsFilter
            devices={devices}
            setDevices={setDevices}
            devicesGlobal={devicesGlobal}
          />
        </Grid>
        <Grid item xs={12}>
          <PriceFilter
            devices={devices}
            setDevices={setDevices}
            devicesGlobal={devicesGlobal}
          />
        </Grid>
      </Grid>
    </>
  );
};

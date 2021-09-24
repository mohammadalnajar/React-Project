import { Grid } from '@material-ui/core';
import React from 'react';
import { BrandFilter } from './BrandFilter';
import { OsFilter } from './OsFilter';
import { PriceFilter } from './PriceFilter';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export const BigScreenFilters = ({ devices, setDevices, devicesGlobal }) => {
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <BrandFilter
            devices={devices}
            setDevices={setDevices}
            devicesGlobal={devicesGlobal}
            bigScreen={bigScreen}
          />
        </Grid>
        <Grid item xs={12}>
          <OsFilter
            devices={devices}
            setDevices={setDevices}
            devicesGlobal={devicesGlobal}
            bigScreen={bigScreen}
          />
        </Grid>
        <Grid item xs={12}>
          <PriceFilter
            devices={devices}
            setDevices={setDevices}
            devicesGlobal={devicesGlobal}
            bigScreen={bigScreen}
          />
        </Grid>
      </Grid>
    </>
  );
};

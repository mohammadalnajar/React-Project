import React, { useState, useEffect } from 'react';
import { DeviceItem } from '../components/DeviceItem';
import { Grid } from '@material-ui/core';
import { SearchBar } from '../components/SearchBar';
import { FilterItems } from '../containers/filter/FilterItems';
import { Header } from '../components/Header';

export const ShopPage = ({ devicesGlobal }) => {
  const [devices, setDevices] = useState(devicesGlobal);
  useEffect(() => {
    setDevices(devicesGlobal);
  }, [devicesGlobal]);
  return (
    <>
      <Header page='ShopPage' />

      <Grid container>
        <Grid container item xs={12}>
          <Grid item xs={3} />
          <Grid container item xs={9} alignItems='flex-start'>
            <SearchBar
              devices={devices}
              setDevices={setDevices}
              devicesGlobal={devicesGlobal}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={3}>
            <FilterItems
              devices={devices}
              setDevices={setDevices}
              devicesGlobal={devicesGlobal}
            />
          </Grid>
          <Grid item container xs={9} justifyContent='flex-start'>
            {devices.length > 0 &&
              devices.map((device) => {
                return <DeviceItem key={device._id} device={device} />;
              })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

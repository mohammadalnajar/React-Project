import React, { useState, useEffect } from 'react';
import { DeviceItem } from '../components/DeviceItem';
import { Grid } from '@material-ui/core';
import { SearchBar } from '../components/SearchBar';
import { FilterItems } from '../components/filter/FilterItems';
import { Header } from '../components/Header';
import { ScrollTop } from '../components/ScrolToTop';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Toolbar from '@mui/material/Toolbar';
export const ShopPage = (props) => {
  const [devices, setDevices] = useState(props.devicesGlobal);
  useEffect(() => {
    setDevices(props.devicesGlobal);
  }, [props.devicesGlobal]);
  return (
    <>
      <Header page='ShopPage' />
      <Toolbar
        id='back-to-top-anchor'
        style={{ maxHeight: '0px', minHeight: '0px' }}
      />

      <Grid container style={{ paddingBottom: '60px' }}>
        <Grid container item xs={12}>
          <Grid item xs={3} />
          <Grid container item xs={9} alignItems='flex-start'>
            <SearchBar
              devices={devices}
              setDevices={setDevices}
              devicesGlobal={props.devicesGlobal}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={3}>
            <FilterItems
              devices={devices}
              setDevices={setDevices}
              devicesGlobal={props.devicesGlobal}
            />
          </Grid>
          <Grid item container xs={9} justifyContent='flex-start'>
            {devices.length > 0 &&
              devices.map((device) => {
                return <DeviceItem key={device._id} device={device} />;
              })}
          </Grid>
        </Grid>
        <ScrollTop {...props}>
          <Fab color='secondary' size='small' aria-label='scroll back to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Grid>
    </>
  );
};

import React, { useContext, useEffect } from 'react';
import { ShowModel } from '../components/ShowModel';
import { GlobalContext } from '../context/global/GlobalContext';
import { Grid } from '@material-ui/core';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Toolbar from '@mui/material/Toolbar';
import { ScrollTop } from '../components/ScrolToTop';
export const HomePage = (props) => {
  const { devices, getDevices } = useContext(GlobalContext);
  useEffect(() => {
    getDevices();
  }, []);
  return (
    <>
      {' '}
      <Toolbar
        id='back-to-top-anchor'
        style={{ maxHeight: '0px', minHeight: '0px' }}
      />
      <Grid container style={{ paddingBottom: '50px' }}>
        {devices
          .sort((a, b) => (a.name < b.name ? 1 : -1))
          .map((device) => {
            if (device.name.toLowerCase().trim() === 'iphone 13 pro') {
              return (
                <ShowModel
                  key={device._id}
                  priColor='#21333C'
                  secColor='#F8E224'
                  thrColor='#FFFFFF'
                  imageUrl={device.imageUrl}
                  device={device}
                />
              );
            } else if (
              device.name.toLowerCase().trim() === 'samsung galaxy s21 plus'
            ) {
              return (
                <ShowModel
                  key={device._id}
                  priColor='#F5F5F5'
                  secColor='#57AEE4'
                  thrColor='#000000'
                  imageUrl={device.imageUrl}
                  device={device}
                />
              );
            } else if (
              device.name.toLowerCase().trim() === 'samsung galaxy z fold3'
            ) {
              return (
                <ShowModel
                  key={device._id}
                  priColor='#50A0DF'
                  secColor='#F8E224'
                  thrColor='#FFFFFF'
                  imageUrl={device.imageUrl}
                  device={device}
                />
              );
            }
            return false;
          })}
        <ScrollTop {...props}>
          <Fab color='secondary' size='small' aria-label='scroll back to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Grid>
    </>
  );
};

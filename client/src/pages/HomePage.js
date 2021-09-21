import React, { useContext, useEffect } from 'react';
import { ShowModel } from '../components/ShowModel';
import { GlobalContext } from '../context/global/GlobalContext';
import iphone13img from '../assets/images/iphone_13.png';
import { Grid } from '@material-ui/core';
export const HomePage = () => {
  const { devices, getDevices } = useContext(GlobalContext);
  useEffect(() => {
    getDevices();
  }, []);
  return (
    <>
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
                  imageUrl={iphone13img}
                  device={device}
                />
              );
            } else if (
              device.name.toLowerCase().trim() === 'samsung s21 plus'
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
            } else if (device.name.toLowerCase().trim() === 'iphone 12 pro') {
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
            }
          })}
      </Grid>
    </>
  );
};

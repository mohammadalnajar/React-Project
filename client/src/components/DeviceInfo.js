import { Grid } from '@material-ui/core';
import React from 'react';

export const DeviceInfo = ({ device }) => {
  const { type, size, resolution } = device.specs.display;
  const { OS, chipSet } = device.specs.platform;
  const { ram, storage } = device.specs.memory;
  const { main, selfie } = device.specs.camera;
  const { capacity } = device.specs.battery;

  return (
    <>
      <Grid container className='p-2'>
        <Grid item xs={6} container className='px-1'>
          <Grid item container xs={12}>
            <Grid item xs={12} className='py-1'>
              <strong> Display:</strong>
            </Grid>
            <Grid item xs={12}>
              Type: {type}
            </Grid>
            <Grid item xs={12}>
              Size: {size}
            </Grid>
            <Grid item xs={12}>
              Resolution: {resolution}
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12} className='pt-1'>
              <strong> Platform:</strong>
            </Grid>
            <Grid item xs={12}>
              OS: {OS}
            </Grid>
            <Grid item xs={12}>
              Chipset: {chipSet}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} container>
          <Grid item container xs={12}>
            <Grid item xs={12} className='pt-1'>
              <strong>Memory:</strong>
            </Grid>
            <Grid item xs={12}>
              Ram: {ram.map((r, i, a) => (a.length < 2 ? r : `${r}, `))}
            </Grid>
            <Grid item xs={12}>
              Storage: {storage.map((r, i, a) => (a.length < 2 ? r : `${r}, `))}
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12} className='pt-1'>
              <strong> Camera:</strong>
            </Grid>
            <Grid item xs={12}>
              Main:{main}
            </Grid>
            <Grid item xs={12}>
              Selfie:{selfie}
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12} className='pt-1'>
                <strong> Battery:</strong>
              </Grid>
              Capacity: {capacity}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

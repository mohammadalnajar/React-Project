import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BigScreenFilters } from './BigScreenFilters';
import { SmallScreenFilters } from './SmallScreenFilters';

export const FilterItems = ({ devices, setDevices, devicesGlobal }) => {
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      {bigScreen ? (
        <BigScreenFilters
          devices={devices}
          setDevices={setDevices}
          devicesGlobal={devicesGlobal}
        />
      ) : (
        <SmallScreenFilters
          devices={devices}
          setDevices={setDevices}
          devicesGlobal={devicesGlobal}
        />
      )}
    </>
  );
};

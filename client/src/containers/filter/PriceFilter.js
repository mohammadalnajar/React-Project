import React, { useEffect, useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const PriceFilter = ({ devices, setDevices, devicesGlobal }) => {
  const [checked, setChecked] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setChecked((prev) => {
        return [...prev, e.target.value];
      });
    } else {
      setChecked((prev) => {
        return prev.filter((item) => item !== e.target.value);
      });
    }
  };

  useEffect(() => {
    const filteredDevices = devicesGlobal.filter((device) => {
      if (device.price > 650 && checked.includes('expensive')) {
        return device;
      } else if (
        device.price < 650 &&
        device.price > 300 &&
        checked.includes('normal')
      ) {
        return device;
      } else if (device.price < 301 && checked.includes('cheap')) {
        return device;
      }
      return false;
    });
    setDevices(filteredDevices);
    if (checked.length < 1) {
      setDevices(devicesGlobal);
    }
  }, [checked, setDevices, devicesGlobal]);
  return (
    <>
      <FormControl component='fieldset' sx={{ m: 3 }} variant='standard'>
        <FormLabel>Price:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: '#c5c5c5',
                  '&.Mui-checked': {
                    color: '#50A0DF',
                  },
                }}
                size='small'
                onChange={handleChange}
                name='expensive'
                value='expensive'
              />
            }
            label='More than $650'
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: '#c5c5c5',
                  '&.Mui-checked': {
                    color: '#50A0DF',
                  },
                }}
                size='small'
                onChange={handleChange}
                name='normal'
                value='normal'
              />
            }
            label='Between $300 and $650'
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: '#c5c5c5',
                  '&.Mui-checked': {
                    color: '#50A0DF',
                  },
                }}
                size='small'
                onChange={handleChange}
                name='cheap'
                value='cheap'
              />
            }
            label='To $300'
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

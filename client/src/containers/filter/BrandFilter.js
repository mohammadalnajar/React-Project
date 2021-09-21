import React, { useEffect, useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@material-ui/core';

export const BrandFilter = ({ devices, setDevices, devicesGlobal }) => {
  const brands = [...new Set(devicesGlobal.map((device) => device.brand))];
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
    const filteredDevices = devicesGlobal.filter((device) =>
      checked.includes(device.brand)
    );
    setDevices(filteredDevices);
    if (checked.length < 1) {
      setDevices(devicesGlobal);
    }
  }, [checked, setDevices, devicesGlobal]);
  return (
    <>
      <FormControl component='fieldset' sx={{ m: 3 }} variant='standard'>
        <FormLabel>Brand:</FormLabel>
        <FormGroup>
          {brands.length > 0 &&
            brands.map((brand) => (
              <Grid
                key={brand}
                container
                alignItems='center'
                justifyContent='center'
              >
                <Grid item xs={8}>
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
                        name={brand}
                        value={brand}
                      />
                    }
                    label={brand}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  container
                  justifyContent='flex-end'
                  style={{ color: '#9C9C9C' }}
                >
                  {
                    devicesGlobal.filter((device) => {
                      return device.brand === brand;
                    }).length
                  }
                </Grid>
              </Grid>
            ))}
        </FormGroup>
      </FormControl>
    </>
  );
};

import React, { useEffect, useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@material-ui/core';

export const OsFilter = ({ devices, setDevices, devicesGlobal }) => {
  const operationSystems = [
    ...new Set(devicesGlobal.map((device) => device.specs.platform.OS)),
  ];
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
      checked.includes(device.specs.platform.OS)
    );
    setDevices(filteredDevices);
    if (checked.length < 1) {
      setDevices(devicesGlobal);
    }
  }, [checked, setDevices, devicesGlobal]);
  return (
    <>
      <FormControl component='fieldset' sx={{ m: 3 }} variant='standard'>
        <FormLabel>OS:</FormLabel>
        <FormGroup>
          <Grid container alignItems='center' justifyContent='center'>
            {operationSystems.length > 0 &&
              operationSystems.map((os) => (
                <Grid
                  key={os}
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
                          name={os}
                          value={os}
                        />
                      }
                      label={os}
                    />{' '}
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
                        return device.specs.platform.OS === os;
                      }).length
                    }
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </FormGroup>
      </FormControl>
    </>
  );
};

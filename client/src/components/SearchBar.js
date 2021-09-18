import React, { useCallback, useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';

export const SearchBar = ({ devices, setDevices, devicesGlobal }) => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const filterDevices = useCallback(() => {
    const filteredDevices = devicesGlobal.filter(
      (device) =>
        device.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
    );
    setDevices(filteredDevices);
  }, [inputValue, devicesGlobal, setDevices]);
  useEffect(() => {
    filterDevices();
  }, [filterDevices]);
  return (
    <Grid item xs={6} className='my-3 mx-2'>
      <div>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id='controllable-states-demo'
          options={devices.map((device) => device.name)}
          sx={{ width: 200 }}
          renderInput={(params) => (
            <TextField {...params} label='Search input' variant='standard' />
          )}
        />
      </div>
    </Grid>
  );
};

import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
export const SearchBar = ({ devices }) => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    console.log(inputValue);
  }, [value, inputValue]);
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
      {/* <Autocomplete
        freeSolo
        disableClearable
        options={devices.map((device) => device.name)}
        renderInput={(params) => (
          <TextField
            onChange={(e) => setInput(e.target.value)}
            value={input}
            {...params}
            label='Search input'
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      /> */}
    </Grid>
  );
};

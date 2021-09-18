import React, { useCallback, useEffect, useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
    console.log(filteredDevices, 'filteredDevices');
    setDevices(filteredDevices);
    if (checked.length < 1) {
      setDevices(devicesGlobal);
    }
  }, [checked]);
  return (
    <>
      <FormControl
        required
        // error={error}
        component='fieldset'
        sx={{ m: 3 }}
        variant='standard'
      >
        <FormLabel>Brand:</FormLabel>
        <FormGroup>
          {brands.length > 0 &&
            brands.map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    size='small'
                    onChange={handleChange}
                    name={brand}
                    value={brand}
                  />
                }
                label={brand}
              />
            ))}
        </FormGroup>
      </FormControl>
    </>
  );
};

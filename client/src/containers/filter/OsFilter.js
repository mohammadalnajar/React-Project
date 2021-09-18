import React, { useEffect, useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
    console.log(checked);
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
      <FormControl
        required
        component='fieldset'
        sx={{ m: 3 }}
        variant='standard'
      >
        <FormLabel>OS:</FormLabel>
        <FormGroup>
          {operationSystems.length > 0 &&
            operationSystems.map((os) => (
              <FormControlLabel
                key={os}
                control={
                  <Checkbox
                    size='small'
                    onChange={handleChange}
                    name={os}
                    value={os}
                  />
                }
                label={os}
              />
            ))}
        </FormGroup>
      </FormControl>
    </>
  );
};

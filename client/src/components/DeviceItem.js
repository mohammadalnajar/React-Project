import React from 'react';
import { makeStyles } from '@mui/styles';
import notFound from '../assets/not-found-img.jpg';
import { AddToCart } from './AddToCart';

export const DeviceItem = ({ device }) => {
  const useStyles = makeStyles({
    container: {
      border: '2px solid black',
      width: '80%',
      margin: '20px 10px 20px auto',
      display: 'flex',
      flexWrap: 'wrap',
    },
    dFlex: {
      display: 'flex',
      alignItems: 'center',
    },
    deviceContainer: {
      border: '2px solid black',
      margin: '10px',
      flexBasis: '25%',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.deviceContainer}>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <img src={notFound} alt='not found' width='50px' />
        </li>
        <li>
          {device.name} {device.specs.memory.storage[0]}
        </li>
        <li>${device.price}-</li>
        <li>
          <AddToCart />
        </li>
      </ul>
    </div>
  );
};

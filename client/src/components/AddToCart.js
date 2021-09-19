import React, { useContext } from 'react';
import { GlobalContext } from '../context/global/GlobalContext';

export const AddToCart = ({ device }) => {
  const { addItemToCart } = useContext(GlobalContext);
  const {
    _id,
    name,
    imageUrl,
    price,
    specs: {
      memory: { storage },
    },
  } = device;
  const item = {
    _id,
    name,
    imageUrl,
    price,
    storage: storage[0],
    quantity: 1,
  };
  return <button onClick={() => addItemToCart(item)}>+</button>;
};

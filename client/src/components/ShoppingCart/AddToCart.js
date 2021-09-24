import React, { useContext } from 'react';
import { GlobalContext } from '../../context/global/GlobalContext';
import { Grid } from '@material-ui/core';
import { useSnackbar } from 'notistack';
export const AddToCart = ({
  device,
  text,
  classNameStyle,
  bgColor,
  textColor,
}) => {
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
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = (variant) => () => {
    addItemToCart(item);
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`The ${item.name} is added to your shop cart!`, {
      variant,
    });
  };

  return (
    <>
      <Grid item xs={12}>
        <button
          style={{
            backgroundColor: bgColor,
            color: textColor.length > 0 ? textColor : 'black',
          }}
          className={classNameStyle}
          onClick={handleAddToCart('success')}
        >
          {text}
        </button>
      </Grid>
    </>
  );
};

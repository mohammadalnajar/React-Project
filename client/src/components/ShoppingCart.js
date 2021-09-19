import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { GlobalContext } from '../context/global/GlobalContext';

export const ShoppingCart = () => {
  const { shoppingCartItems } = useContext(GlobalContext);

  const numItemsInCart = shoppingCartItems
    .map((item) => item.count)
    .reduce((acc, curr) => acc + curr);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      backgroundColor: '#D42A7D',
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  const ShoppingCartTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  // this for testing purpose
  const devices = ['iphone', 'samsung', 'motorola'];
  return (
    <ShoppingCartTooltip
      title={devices.map((d, idx) => (
        <div key={idx} style={{ color: 'red' }}>
          {d}
        </div>
      ))}
      placement='bottom-start'
    >
      <IconButton aria-label='cart'>
        <StyledBadge badgeContent={numItemsInCart} color='secondary'>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </ShoppingCartTooltip>
  );
};

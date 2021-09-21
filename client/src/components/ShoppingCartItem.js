import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { GlobalContext } from '../context/global/GlobalContext';
export const ShoppingCartItem = ({ item }) => {
  const { delItemCart } = useContext(GlobalContext);
  return (
    <>
      {item.quantity > 0 && (
        <Grid item xs={12}>
          <Grid container className='m-2'>
            <Grid container justifyContent='center' item xs={4}>
              <img src={item.imageUrl} alt='' style={{ maxHeight: '100px' }} />
            </Grid>
            <Grid item container xs={8}>
              <Grid item xs={12}>
                {item.name} {item.storage}
              </Grid>
              <Grid item container alignItems='center' xs={12}>
                <Grid item xs={6}>
                  ${item.price}
                </Grid>
                <Grid container item xs={3}>
                  {item.quantity}
                </Grid>
                <Grid container justifyContent='center' item xs={3}>
                  <IconButton
                    onClick={() => delItemCart(item)}
                    aria-label='delete'
                    size='small'
                  >
                    <DeleteIcon fontSize='small' />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

// import Badge from '@mui/material/Badge';
// import AddIcon from '@mui/icons-material/Add';
// import { styled } from '@mui/material/styles';
// import { GlobalContext } from '../context/global/GlobalContext';
// const Count = ({ itemCount, itemId }) => {
//   const [count, setCount] = useState(itemCount);
//   const { setItemCount } = useContext(GlobalContext);

//   const StyledBadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//       right: 8,
//       top: -10,
//       position: 'relative',
//     },
//   }));

//   return (
//     <>
//       <Grid container item justifyContent='center' xs={12}>
//         <Grid item xs={4}>
//           <button
//             aria-label='reduce'
//             onClick={() => {
//               setCount(Math.max(count - 1, 0));
//               setItemCount({ count, itemId });
//             }}
//           >
//             -
//           </button>
//         </Grid>
//         <Grid item container justifyContent='center' xs={4}>
//           <Grid item xs={12}>
//             <StyledBadge color='secondary' badgeContent={count} />
//           </Grid>
//         </Grid>

//         <Grid item xs={4}>
//           <AddIcon
//             aria-label='increase'
//             onClick={() => {
//               setCount(count + 1);
//               setItemCount({ count, itemId });
//             }}
//           />
//         </Grid>
//       </Grid>
//     </>
//   );
// };

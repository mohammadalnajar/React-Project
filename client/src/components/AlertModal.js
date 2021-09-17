import { Modal, Box, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import React from 'react';

export const AlertModal = ({ open, handleClose, alertMessage }) => {
  const style = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {alertMessage}
          </Typography>
          <Button
            onClick={handleClose}
            variant='outlined'
            color='error'
            endIcon={<CloseIcon />}
          >
            CLOSE
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

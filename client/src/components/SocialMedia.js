import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForumIcon from '@mui/icons-material/Forum';
const actions = [
  {
    icon: (
      <a
        href='https://www.linkedin.com/in/mohammad-al-najar-489023152/'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedInIcon />
      </a>
    ),
    name: 'LinkedIn',
  },
  {
    icon: (
      <a
        href='https://github.com/mohammadalnajar'
        target='_blank'
        rel='noreferrer'
      >
        <GitHubIcon />
      </a>
    ),
    name: 'Github',
  },
];

export const ControlledOpenSpeedDial = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      className='social-icon'
      sx={{
        transform: 'translateZ(0px)',
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel='Social media'
        icon={<ForumIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

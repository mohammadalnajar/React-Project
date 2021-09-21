import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  nav: {},
  fixed: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '95vw',
  },
  dFlex: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    height: '100%',
    fontFamily: 'tele-bold',
  },
  btn: {
    height: '100%',
    fontFamily: 'tele-bold',
    '&:hover': {
      backgroundColor: '#F5F5F5',
      color: '#50A0DF',
    },
  },
  deviceContainer: {
    borderRadius: '5px',
    backgroundColor: '#EEEEEE',
  },
});

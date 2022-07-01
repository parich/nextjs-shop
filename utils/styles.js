import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    background: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '90vh',
  },
  footer: {
    textAlign: 'center',
  },
});

export default useStyles;

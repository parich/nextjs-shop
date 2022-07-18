import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
  return {
    navbar: {
      backgroundColor: '#203040',
      '& a': {
        color: '#ffffff',
        marginLeft: 10,
      },
    },

    brand: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },

    grow: {
      flexGrow: 1,
    },

    main: {
      minHeight: '90vh',
    },
    footer: {
      marginTop: 10,
      textAlign: 'center',
    },
    section: {
      marginTop: 10,
      marginBottom: 10,
    },
  };
});
export default useStyles;

import Head from 'next/head';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>next shop</title>
        <meta content="Next.js ทดสอบ" name="description"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Next Shop
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container className={classes.main}>{children}</Container>

      <footer className={classes.footer}>
        <Typography>All rights reserved. Next Shop. </Typography>
      </footer>
    </div>
  );
}

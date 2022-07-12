import Head from 'next/head';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Link } from '@mui/material';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Layout({ title, description, children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - next shop` : 'next shop'}</title>
        {description && <meta content={description} name="description"></meta>}
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
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Next Shop</Typography>
              </Link>
            </NextLink>

            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
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

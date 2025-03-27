import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ background: 'transparent' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isMobile ? '100%' : '100%',
            maxWidth: isMobile ? '100%' : '1300px',
            padding: '10px 20px',
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: isMobile ? '0 0 15px 15px' : '0 0 15px 15px',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          <img src={logo} alt="dAlert Logo" style={{ height: '30px', marginRight: '10px' }} />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Features</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Join Waitlist</MenuItem>
              </Menu>
            </>
          ) : (
            <Box>
              <Button color="inherit" sx={{ mx: 1 }}>Home</Button>
              <Button color="inherit" sx={{ mx: 1 }}>Features</Button>
              <Button color="inherit" sx={{ mx: 1 }}>CTA</Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
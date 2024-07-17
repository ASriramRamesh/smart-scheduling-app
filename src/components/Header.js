import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" component="div" color="text.primary">
          Schedule
        </Typography>
        <IconButton 
          edge="end" 
          color="inherit" 
          aria-label="settings"
          onClick={() => console.log('Settings clicked')}
        >
          <Settings />
        </IconButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
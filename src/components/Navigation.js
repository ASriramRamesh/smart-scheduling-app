import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, CalendarIcon, TaskIcon, ProfileIcon } from '../assets/icons';

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledBottomNavigation
      value={location.pathname}
      onChange={(event, newValue) => {
        navigate(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} value="/" />
      <BottomNavigationAction label="Schedule" icon={<CalendarIcon />} value="/schedule" />
      <BottomNavigationAction label="Tasks" icon={<TaskIcon />} value="/tasks" />
      <BottomNavigationAction label="Profile" icon={<ProfileIcon />} value="/profile" />
    </StyledBottomNavigation>
  );
};

export default Navigation;
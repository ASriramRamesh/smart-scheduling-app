import React from 'react';
import { Container, Typography, Box, Avatar, List, ListItem, ListItemText, Divider } from '@mui/material';
import Navigation from '../components/Navigation';

const ProfilePage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 2, mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ width: 100, height: 100, mb: 2 }}>JD</Avatar>
        <Typography variant="h4" gutterBottom>John Doe</Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>john.doe@example.com</Typography>
      </Box>
      <List>
        <ListItem>
          <ListItemText primary="Account Settings" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Notification Preferences" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Energy Level Settings" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Help & Support" />
        </ListItem>
      </List>
      <Navigation />
    </Container>
  );
};

export default ProfilePage;
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Navigation from '../components/Navigation';

const SchedulePage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="h4" gutterBottom>Schedule</Typography>
        {/* Add a calendar or more detailed schedule view here */}
        <Typography variant="body1">Detailed schedule view coming soon...</Typography>
      </Box>
      <Navigation />
    </Container>
  );
};

export default SchedulePage;
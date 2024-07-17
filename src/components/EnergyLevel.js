import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

const EnergyBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
}));

const EnergyBar = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[800],
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
  },
}));

const EnergyLevel = ({ level, productiveHours, weeklyLevels }) => {
  return (
    <EnergyBox>
      <Typography variant="h6" gutterBottom>
        Energy Level
      </Typography>
      <Typography variant="h3" gutterBottom>
        {level}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {productiveHours} +20%
      </Typography>
      {Object.entries(weeklyLevels).map(([day, value]) => (
        <Box key={day} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="body2" sx={{ minWidth: 40 }}>
            {day}
          </Typography>
          <EnergyBar variant="determinate" value={value * 10} sx={{ flexGrow: 1 }} />
        </Box>
      ))}
    </EnergyBox>
  );
};

export default EnergyLevel;
import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  '& .MuiButton-root': {
    color: theme.palette.text.secondary,
    '&.active': {
      backgroundColor: theme.palette.action.selected,
      color: theme.palette.text.primary,
    },
  },
}));

const DateSelector = ({ selectedDate, onDateChange }) => {
  return (
    <StyledButtonGroup variant="text" aria-label="date selection">
      <Button
        className={selectedDate === 'today' ? 'active' : ''}
        onClick={() => onDateChange('today')}
      >
        Today
      </Button>
      <Button
        className={selectedDate === 'tomorrow' ? 'active' : ''}
        onClick={() => onDateChange('tomorrow')}
      >
        Tomorrow
      </Button>
      <Button
        className={selectedDate === 'week' ? 'active' : ''}
        onClick={() => onDateChange('week')}
      >
        Week
      </Button>
    </StyledButtonGroup>
  );
};

export default DateSelector;
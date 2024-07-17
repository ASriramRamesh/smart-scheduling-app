import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Coffee, Work, ShoppingCart, ChevronRight } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledList = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const getIcon = (taskType) => {
  switch (taskType) {
    case 'coffee': return <Coffee />;
    case 'meeting': return <Work />;  // Changed from Briefcase to Work
    case 'shopping': return <ShoppingCart />;
    default: return <Coffee />;
  }
};

const TaskList = ({ tasks = [] }) => {
  if (tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <StyledList>
      {tasks.map((task, index) => (
        <StyledListItem key={task.id || index}>
          <ListItemIcon>{getIcon(task.type)}</ListItemIcon>
          <ListItemText 
            primary={task.description}
            secondary={task.time}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="details">
              <ChevronRight />
            </IconButton>
          </ListItemSecondaryAction>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default TaskList;
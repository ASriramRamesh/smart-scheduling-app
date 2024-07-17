import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledFab color="primary" aria-label="add" onClick={onClick}>
      <AddIcon />
    </StyledFab>
  );
};

export default AddTaskButton;
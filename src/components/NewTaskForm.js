import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
}));

const FormField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const NewTaskForm = ({ open, onClose, onSubmit }) => {
  const [task, setTask] = useState({
    title: '',
    priority: 'low',
    dueDate: new Date().toISOString().split('T')[0],
    timeEstimate: 15,
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(task);
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>New Task</DialogTitle>
      <DialogContent>
        <FormField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          value={task.title}
          onChange={handleChange}
        />
        <FormControl fullWidth variant="outlined" margin="dense">
          <InputLabel>Priority</InputLabel>
          <Select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            label="Priority"
          >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>
        <FormField
          margin="dense"
          name="dueDate"
          label="Due Date"
          type="date"
          fullWidth
          variant="outlined"
          value={task.dueDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <FormField
          margin="dense"
          name="timeEstimate"
          label="Time Estimate (minutes)"
          type="number"
          fullWidth
          variant="outlined"
          value={task.timeEstimate}
          onChange={handleChange}
        />
        <FormField
          margin="dense"
          name="notes"
          label="Notes"
          type="text"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={task.notes}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add Task
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default NewTaskForm;
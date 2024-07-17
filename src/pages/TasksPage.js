import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import TaskList from '../components/TaskList';
import AddTaskButton from '../components/AddTaskButton';
import NewTaskForm from '../components/NewTaskForm';
import Navigation from '../components/Navigation';

const TasksPage = () => {
  const [isNewTaskFormOpen, setNewTaskFormOpen] = useState(false);
  const [tasks, setTasks] = useState([
    { type: 'meeting', description: 'Prepare for DBMS Project Presentation', time: '3:00 PM' },
    { type: 'meeting', description: 'Prepare for java Project Presentation', time: '10:00 AM' },
    { type: 'shopping', description: 'Buy office supplies', time: '5:00 PM' },
  ]);

  const handleNewTask = (task) => {
    setTasks([...tasks, { type: 'meeting', description: task.title, time: '12:00 PM' }]);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="h4" gutterBottom>Tasks</Typography>
        <TaskList tasks={tasks} />
      </Box>
      <AddTaskButton onClick={() => setNewTaskFormOpen(true)} />
      <Navigation />
      <NewTaskForm 
        open={isNewTaskFormOpen} 
        onClose={() => setNewTaskFormOpen(false)}
        onSubmit={handleNewTask}
      />
    </Container>
  );
};

export default TasksPage;
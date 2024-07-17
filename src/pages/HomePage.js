import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import DateSelector from '../components/DateSelector';
import TaskList from '../components/TaskList';
import EnergyLevel from '../components/EnergyLevel';
import AddTaskButton from '../components/AddTaskButton';
import Navigation from '../components/Navigation';
import NewTaskForm from '../components/NewTaskForm';

const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState('today');
  const [isNewTaskFormOpen, setNewTaskFormOpen] = useState(false);
  const [tasks, setTasks] = useState([
    { type: 'meeting', description: 'Prepare for DBMS Project Presentation', time: '2:00 PM' },
    { type: 'meeting', description: 'Prepare for Java Project presentation', time: '4:00 PM' },
    { type: 'shopping', description: 'Buy the utilities', time: '6:30 PM' },
  ]);

  const energyLevelData = {
    level: 5,
    productiveHours: '10 AM - 6 PM',
    weeklyLevels: { Mon: 8, Tue: 6, Wed: 7, Thu: 5, Fri: 9 }
  };

  const handleNewTask = (task) => {
    setTasks([...tasks, { type: 'coffee', description: task.title, time: '12:00 PM' }]);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="h4" gutterBottom>Schedule</Typography>
        <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </Box>
      <TaskList tasks={tasks} />
      <Box sx={{ mt: 4 }}>
        <EnergyLevel {...energyLevelData} />
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

export default HomePage;
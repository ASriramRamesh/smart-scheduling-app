import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [energyLevels, setEnergyLevels] = useState({
    today: 5,
    weeklyLevels: { Mon: 8, Tue: 6, Wed: 7, Thu: 5, Fri: 9 },
    productiveHours: '10 AM - 6 PM'
  });
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    settings: {
      notifications: true,
      darkMode: true
    }
  });

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, { ...newTask, id: Date.now() }]);
  };

  // Function to update a task
  const updateTask = (updatedTask) => {
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // Function to update energy levels
  const updateEnergyLevels = (newLevels) => {
    setEnergyLevels(prevLevels => ({ ...prevLevels, ...newLevels }));
  };

  // Function to update user settings
  const updateUserSettings = (newSettings) => {
    setUser(prevUser => ({
      ...prevUser,
      settings: { ...prevUser.settings, ...newSettings }
    }));
  };

  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // The value that will be given to the context
  const contextValue = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    energyLevels,
    updateEnergyLevels,
    user,
    updateUserSettings
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Custom hook for using the app context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
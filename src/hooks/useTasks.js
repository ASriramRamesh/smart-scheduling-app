import { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';

const useTasks = () => {
  const { tasks, addTask, updateTask, deleteTask } = useAppContext();
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const addNewTask = (task) => {
    addTask({
      ...task,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    });
  };

  const updateExistingTask = (taskId, updates) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (taskToUpdate) {
      updateTask({
        ...taskToUpdate,
        ...updates,
        updatedAt: new Date().toISOString(),
      });
    }
  };

  const removeTask = (taskId) => {
    deleteTask(taskId);
  };

  const filterTasks = (filter) => {
    switch (filter) {
      case 'today':
        setFilteredTasks(tasks.filter(task => {
          const taskDate = new Date(task.dueDate);
          const today = new Date();
          return taskDate.toDateString() === today.toDateString();
        }));
        break;
      case 'upcoming':
        setFilteredTasks(tasks.filter(task => {
          const taskDate = new Date(task.dueDate);
          const today = new Date();
          return taskDate > today;
        }));
        break;
      case 'completed':
        setFilteredTasks(tasks.filter(task => task.completed));
        break;
      default:
        setFilteredTasks(tasks);
    }
  };

  const getTaskStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  };

  return {
    tasks: filteredTasks,
    addNewTask,
    updateExistingTask,
    removeTask,
    filterTasks,
    getTaskStats,
  };
};

export default useTasks;
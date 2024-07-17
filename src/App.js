import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProvider } from './contexts/AppContext';
import theme from './styles/theme';

// Import pages
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import TasksPage from './pages/TasksPage';
import ProfilePage from './pages/ProfilePage';

// Import components
import Navigation from './components/Navigation';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Navigation />
          </div>
        </Router>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
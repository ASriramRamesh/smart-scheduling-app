import { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';

const useEnergyLevel = () => {
  const { energyLevels, updateEnergyLevels } = useAppContext();
  const [currentEnergyLevel, setCurrentEnergyLevel] = useState(energyLevels.today);

  useEffect(() => {
    // Update current energy level when energyLevels changes
    setCurrentEnergyLevel(energyLevels.today);
  }, [energyLevels]);

  const calculateDailyEnergyLevel = () => {
    // This is a placeholder function. In a real app, this could be more complex,
    // potentially considering factors like sleep, activity, time of day, etc.
    const randomFactor = Math.random() * 2 - 1; // Random number between -1 and 1
    const newLevel = Math.min(Math.max(currentEnergyLevel + randomFactor, 1), 10);
    return Math.round(newLevel);
  };

  const updateDailyEnergyLevel = () => {
    const newLevel = calculateDailyEnergyLevel();
    updateEnergyLevels({ today: newLevel });
  };

  const getEnergyTrend = () => {
    const levels = Object.values(energyLevels.weeklyLevels);
    const average = levels.reduce((sum, level) => sum + level, 0) / levels.length;
    if (currentEnergyLevel > average) return 'increasing';
    if (currentEnergyLevel < average) return 'decreasing';
    return 'stable';
  };

  return {
    currentEnergyLevel,
    weeklyLevels: energyLevels.weeklyLevels,
    productiveHours: energyLevels.productiveHours,
    updateDailyEnergyLevel,
    getEnergyTrend,
  };
};

export default useEnergyLevel;
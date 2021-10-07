import { useContext } from 'react';
import { ThemeContext } from '../providers/theme';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('You can use this hook just inside ThemeProvider');
  }

  return context;
};

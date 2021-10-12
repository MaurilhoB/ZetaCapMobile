import { useContext } from 'react';
import { Preferences } from '../providers/preferences';

export const usePreferences = () => {
  const context = useContext(Preferences);

  if (!context) {
    throw new Error('Context should be used inside the Provider');
  }

  return context;
};

export default usePreferences;

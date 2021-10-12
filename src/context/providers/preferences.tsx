import React, { createContext, Dispatch, SetStateAction } from 'react';

import useStorageState from '../hooks/useStoragedState';

interface IAppPreferencesContextData extends IPreferencesProps {
  setPreferences: Dispatch<SetStateAction<IPreferencesProps>>;
}

interface IPreferencesProps {
  currency: 'USD' | 'BRL';
}

export const Preferences = createContext<IAppPreferencesContextData>(
  {} as IAppPreferencesContextData,
);

const PreferencesProvider: React.FC = ({ children }) => {
  const [preferences, setPreferences] = useStorageState<IPreferencesProps>(
    '@ZetaCap:preferences',
    {
      currency: 'USD',
    },
  );

  return (
    <Preferences.Provider value={{ ...preferences, setPreferences }}>
      {children}
    </Preferences.Provider>
  );
};

export default PreferencesProvider;

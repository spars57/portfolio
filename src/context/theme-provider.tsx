import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

import useLocalstorage from '../hooks/useLocalstorage';

type ContextConfiguration = {
  mode: 'light' | 'dark';
  switchMode: () => void;
};

export const ThemeContext = React.createContext<ContextConfiguration>(
  {} as ContextConfiguration
);

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { get, set } = useLocalstorage();
  const [mode, setMode] = useState<'light' | 'dark'>(
    (get('mode') as any) ?? 'light'
  );

  const switchMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    set('mode', mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, switchMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

import { useEffect, useState } from 'react';
import useLocalstorage from './useLocalstorage';

const useTheme = () => {
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

  return { mode, switchMode };
};

export default useTheme;

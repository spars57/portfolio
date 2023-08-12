import React from 'react';
import { ThemeContext } from '../context/theme-provider';

const useTheme = () => React.useContext(ThemeContext);

export default useTheme;

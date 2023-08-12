import React from 'react';
import { LanguageContext } from './../context/language-provider';

const useLanguage = () => React.useContext(LanguageContext);

export default useLanguage;

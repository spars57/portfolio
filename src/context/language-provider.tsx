import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

import useLocalstorage from '../hooks/useLocalstorage';
import { L_ENGLISH } from '../langs/english';
import { L_FRENCH } from '../langs/french';
import { L_GERMAN } from '../langs/german';
import { L_PORTUGUESE } from '../langs/portuguese';
import { L_SPANISH } from '../langs/spanish';

type ContextConfiguration = {
  language: typeof L_ENGLISH;
  languageKey: keyof typeof languageMapper;
  switchLanguage: (languageKey: keyof typeof languageMapper) => void;
};

export const languageMapper = {
  en: L_ENGLISH,
  pt: L_PORTUGUESE,
  fr: L_FRENCH,
  de: L_GERMAN,
  es: L_SPANISH,
} as const;

export const LanguageContext = React.createContext<ContextConfiguration>(
  {} as ContextConfiguration
);

const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState(L_ENGLISH);
  const { set, get } = useLocalstorage();
  const [languageKey, setLanguageKey] = useState<string>(
    String(get('lang') ?? 'en')
  );

  const switchLanguage = (language: keyof typeof languageMapper) => {
    setLanguageKey(language);
  };

  useEffect(() => {
    const current = get('lang');
    if (current) {
      setLanguage(current as any);
    } else {
      setLanguageKey('en');
    }
  }, []);

  useEffect(() => {
    set('lang', languageKey);
  }, [languageKey]);

  useEffect(() => {
    setLanguage(
      languageMapper[languageKey as keyof typeof languageMapper] as any
    );
  }, [languageKey]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageKey: languageKey as keyof typeof languageMapper,
        switchLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

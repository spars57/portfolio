import { useEffect, useState } from 'react';
import { L_ARABIC } from '../langs/arabic';
import { L_CHINESE } from '../langs/chinese';
import { L_ENGLISH } from '../langs/english';
import { L_GERMAN } from '../langs/german';
import { L_HINDI } from '../langs/hindi';
import { L_JAPANESE } from '../langs/japanese';
import { L_RUSSIAN } from '../langs/russian';
import { L_SPANISH } from '../langs/spanish';
import { L_FRENCH } from './../langs/french';
import { L_PORTUGUESE } from './../langs/portuguese';
import useLocalstorage from './useLocalstorage';

export const languageMapper = {
  en: L_ENGLISH,
  pt: L_PORTUGUESE,
  fr: L_FRENCH,
  de: L_GERMAN,
  ru: L_RUSSIAN,
  es: L_SPANISH,
  ar: L_ARABIC,
  hi: L_HINDI,
  cn: L_CHINESE,
  jp: L_JAPANESE,
} as const;

const useLanguage = () => {
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
    setLanguage(languageMapper[languageKey as any]);
  }, [languageKey]);

  return {
    switchLanguage,
    language,
    languageKey,
  };
};

export default useLanguage;

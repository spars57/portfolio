import React, { FC } from 'react';
import useLanguage from '../../hooks/useLanguage';
import useTheme from '../../hooks/useTheme';

export const Footer: FC = () => {
  const { mode } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      className={
        mode === 'light'
          ? 'flex flex-col bg-slate-100 text-black w-full bottom-0 absolute p-1 mt-30'
          : 'flex flex-col bg-gray-950 text-slate-100 w-full bottom-0 absolute p-1 mt-30'
      }
      style={{ fontSize: 11 }}
    >
      <div className="p-3 flex flex-col w-full justify-center">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="font-bold">{language.footer.email}</div>
            <a className="ml-1" href="mailto:brunomoisao03@gmail.com">
              brunomoisao03@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

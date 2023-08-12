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
          ? 'flex flex-col bg-white text-black w-full bottom-0 absolute p-1 mt-30'
          : 'flex flex-col bg-gray-900 text-white w-full bottom-0 absolute p-1 mt-30'
      }
      style={{ borderTop: '1px solid lightgray', fontSize: 11 }}
    >
      <div className="p-3 flex flex-col w-full justify-center">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="font-bold">{language.footer.email}</div>
            <a className="ml-1" href="mailto:info@brunomoisao.dev">
              info@brunomoisao.dev
            </a>
          </div>
          <div className="flex flex-row ">
            <div className="font-bold">{language.footer.phoneNumber}</div>
            <a className="ml-1" href="tel:+351930664335">
              +351 930 664 335
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

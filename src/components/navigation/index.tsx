import React, { FC, useState } from 'react';

export type NavigationProps = {
  mode: string;
  language: Record<string, any>;
  languageKey: string;
  switchLanguage: (props: any) => any;
  switchMode: (props: any) => any;
};

export const Navigation: FC<NavigationProps> = ({
  language,
  switchLanguage,
  switchMode,
  languageKey,
  mode,
}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const onSelectLanguage = (e) => {
    const lang = e?.target?.value;
    console.log(lang);
    switchLanguage(lang);
  };

  return (
    <nav
      className={
        mode === 'light' ? 'bg-white text-gray-900' : 'text-white bg-slate-900'
      }
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              mode === 'light' ? 'text-gray-900' : 'text-white'
            }`}
          >
            Bruno Moisão
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">MENU</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={
            open
              ? 'w-full md:block md:w-auto'
              : 'hidden w-full md:block md:w-auto'
          }
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
              mode === 'light'
                ? 'bg-white text-gray-900'
                : 'text-white bg-slate-900'
            }`}
          >
            <li>
              <a
                className={
                  mode === 'light'
                    ? 'bg-white text-gray-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                    : 'text-white bg-slate-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                }
              >
                {language.landingPage.about.toUpperCase()}
              </a>
            </li>
            <li>
              <a
                className={
                  mode === 'light'
                    ? 'bg-white text-gray-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                    : 'text-white bg-slate-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                }
              >
                {language.landingPage.contact.toUpperCase()}
              </a>
            </li>
            <li>
              <a
                className={
                  mode === 'light'
                    ? 'bg-white text-gray-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                    : 'text-white bg-slate-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                }
              >
                {language.landingPage.projects.toUpperCase()}
              </a>
            </li>
            <li>
              <a
                onClick={switchMode}
                className={
                  mode === 'light'
                    ? 'bg-white text-gray-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                    : 'text-white bg-slate-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                }
              >
                {mode === 'light'
                  ? language.darkmode.toUpperCase()
                  : language.lightmode.toUpperCase()}
              </a>
            </li>
            <li>
              <a
                className={
                  mode === 'light'
                    ? 'bg-white text-gray-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                    : 'text-white bg-slate-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                }
              >
                <div className="flex flex-row ">
                  <select
                    id="language-select"
                    className={
                      mode === 'light'
                        ? 'select bg-white text-gray-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                        : 'select text-white bg-slate-900 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                    }
                    onChange={(p) => onSelectLanguage(p)}
                  >
                    <option value={languageKey}>
                      {language.languages.main.toUpperCase()}
                    </option>
                    <option value="en">
                      {language.languages.english.toUpperCase()}
                    </option>
                    <option value="pt">
                      {language.languages.portuguese.toUpperCase()}
                    </option>
                    <option value="fr">
                      {language.languages.french.toUpperCase()}
                    </option>
                    <option value="de">
                      {language.languages.german.toUpperCase()}
                    </option>
                    <option value="ru">
                      {language.languages.russian.toUpperCase()}
                    </option>
                    <option value="ar">
                      {language.languages.arab.toUpperCase()}
                    </option>
                    <option value="es">
                      {language.languages.spanish.toUpperCase()}
                    </option>
                    <option value="hi">
                      {language.languages.indian.toUpperCase()}
                    </option>
                    <option value="cn">
                      {language.languages.chinese.toUpperCase()}
                    </option>
                    <option value="jp">
                      {language.languages.japanese.toUpperCase()}
                    </option>
                  </select>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

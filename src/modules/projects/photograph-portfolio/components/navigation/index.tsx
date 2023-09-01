import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import { PATHS } from '../../../../../config/paths';

export type NavigationProps = {};

export const Navigation: FC<NavigationProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const mode = 'light';
  const navigate = useNavigate();
  const toggleMenu = () => setOpen(!open);

  return (
    <nav className={'text-black'}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap text-black`}
          >
            Jade Ottilie
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
            className={` text-gray-100 bg-slate-950font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0`}
          >
            <li>
              <a
                onClick={() => navigate(PATHS['PROJECTS.PORTFOLIO'])}
                className={
                  mode === 'light'
                    ? 'bg-stale-100 text-black block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                    : 'text-gray-100 bg-slate-950 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                }
              >
                HOME
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate(PATHS['PROJECTS.PORTFOLIO.WORK'])}
                className={
                  mode === 'light'
                    ? 'bg-stale-100 text-black block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                    : 'text-gray-100 bg-slate-950 block py-2 pl-3 pr-4 rounded hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  md:dark:hover:text-gray-500 md:dark:hover:bg-transparent'
                }
              >
                WORK
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

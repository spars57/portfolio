import React, { ReactNode } from 'react';
import LandingPage from '../modules/landing-page';
import ProjectsPage from '../modules/projects';
import { PATHS } from './paths';

type Route = {
  path: string;
  component: ReactNode;
};

export const ROUTES: Route[] = [
  {
    path: PATHS.ABOUT,
    component: <LandingPage />,
  },
  {
    path: PATHS.PROJECTS,
    component: <ProjectsPage />,
  },
  {
    path: '*',
    component: <LandingPage />,
  },
];

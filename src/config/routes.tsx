import React, { ReactNode } from 'react';
import LandingPage from '../modules/landing-page';
import ProjectsPage from '../modules/projects';
import { PhotographPortfolioProject } from '../modules/projects/photograph-portfolio';
import { PhotographPortfolioProjectWork } from '../modules/projects/photograph-portfolio/work';
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
    path: PATHS.PROJECTS,
    component: <ProjectsPage />,
  },
  {
    path: PATHS['PROJECTS.PORTFOLIO'],
    component: <PhotographPortfolioProject />,
  },
  {
    path: PATHS['PROJECTS.PORTFOLIO.WORK'],
    component: <PhotographPortfolioProjectWork />,
  },
  {
    path: PATHS['PROJECTS.PORTFOLIO'] + '/*',
    component: <PhotographPortfolioProject />,
  },
  {
    path: '*',
    component: <LandingPage />,
  },
];

import { LandingPage } from './modules'
import { PATHS_ENUM } from './paths'

export const ROUTE_CONFIG = [
  {
    name: 'Landing Page',
    path: PATHS_ENUM.HOME,
    component: <LandingPage />,
  },
]

import React from 'react';
import { RouterProvider } from 'react-router';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './config/routes';
import LanguageProvider from './context/language-provider';
import ThemeProvider from './context/theme-provider';

const routes: RouteObject[] = [];

ROUTES.map((route) =>
  routes.push({
    path: route.path,
    element: route.component,
  })
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <RouterProvider router={router as any} />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

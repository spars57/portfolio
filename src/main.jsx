import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTE_CONFIG } from './config/routes.jsx'
import { COLORS } from './theme/colors.js'
import theme from './theme/index.js'

const routes = []

ROUTE_CONFIG.map((route) =>
  routes.push({
    path: route.path,
    element: route.component,
  })
)

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box
          display="flex"
          flexGrow={1}
          flexDirection="row"
          width="100%"
          height="100vh"
          style={{ backgroundColor: COLORS.DARK_BLUE }}
        >
          <RouterProvider router={router} />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
)

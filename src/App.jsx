import { Box, CssBaseline } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTE_CONFIG } from './config/routes'
import MODE from './constants/mode'
import useLocalstorage from './hooks/useLocalStorage'
import { useMode } from './hooks/useMode'
import { COLORS } from './theme/colors'

const routes = []

ROUTE_CONFIG.map((route) =>
  routes.push({
    path: route.path,
    element: route.component,
  })
)

const router = createBrowserRouter(routes)

export const App = () => {
  const { mode } = useMode()
  const { get } = useLocalstorage()
  const [currentMode, setCurrentMode] = useState(mode)

  useEffect(() => {
    const local = get('mode')
    local ? setCurrentMode(local) : setCurrentMode(mode)
  }, [mode])

  return (
    <CssBaseline>
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="row"
        width="100%"
        height="100vh"
        style={{
          backgroundColor:
            currentMode === MODE.LIGHT ? COLORS.WHITE : COLORS.BLACK,
        }}
      >
        <RouterProvider router={router} />
      </Box>
    </CssBaseline>
  )
}

export default App

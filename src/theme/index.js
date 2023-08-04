import { createTheme } from '@mui/material'
import { COLORS } from './colors'

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: COLORS.LIGHT_GREEN_BLUE,
    },
    secondary: {
      main: COLORS.LIGHT_BLUE,
    },
  },
})

export default theme

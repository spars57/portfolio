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
      main: COLORS.WHITE,
      dark: COLORS.WHITE,
      light: COLORS.BLACK,
    },
    secondary: {
      main: COLORS.BLACK,
      dark: COLORS.BLACK,
      light: COLORS.WHITE,
    },
  },
})

export default theme

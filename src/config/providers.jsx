import { ThemeProvider } from '@mui/material'
import ModeProvider from '../context/mode-provider'
import theme from '../theme'

const Providers = ({ children }) => {
  return (
    <ModeProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ModeProvider>
  )
}

export default Providers

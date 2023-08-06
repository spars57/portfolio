import React, { useEffect } from 'react'
import MODE from '../constants/mode'
import useLocalstorage from '../hooks/useLocalStorage'

export const ModeContext = React.createContext()

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = React.useState(MODE.LIGHT)
  const { set, get } = useLocalstorage()
  const switchMode = () => {
    setMode(mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT)
    set('mode', mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT)
  }

  useEffect(() => {
    const local = get('mode')
    local && setMode(local)
  }, [])

  return (
    <ModeContext.Provider value={{ mode, switchMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider

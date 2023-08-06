import React from 'react'
import { ModeContext } from '../context/mode-provider'

export const useMode = () => React.useContext(ModeContext)

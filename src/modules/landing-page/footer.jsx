import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, Tooltip, Typography } from '@mui/material'
import { CustomIcon } from '../../components/icon'
import { ICONS } from '../../constants/icons'
import MODE from '../../constants/mode'
import { useMode } from '../../hooks/useMode'
import { openNewTab } from '../../utils/open-new-tab'
export const Footer = () => {
  const { mode, switchMode } = useMode()

  return (
    <Box
      bgcolor={`secondary.${mode}`}
      position="fixed"
      bottom={0}
      p={0.5}
      display="flex"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" flexDirection="row">
        <Tooltip title="LinkedIn">
          <Box
            px={0.5}
            onClick={() =>
              openNewTab(
                'https://www.linkedin.com/in/bruno-mois%C3%A3o-3556a9209/'
              )
            }
          >
            <CustomIcon src={ICONS.LINKEDIN} />
          </Box>
        </Tooltip>
        <Tooltip title={`Switch mode`}>
          <Box onClick={switchMode}>
            {mode === MODE.LIGHT ? (
              <DarkModeIcon fontSize="small" color="secondary" />
            ) : (
              <LightModeIcon fontSize="small" color="primary" />
            )}
          </Box>
        </Tooltip>
        <Tooltip title="Github">
          <Box
            px={0.5}
            onClick={() => openNewTab('https://github.com/spars57')}
          >
            <CustomIcon src={ICONS.GITHUB} />
          </Box>
        </Tooltip>
      </Box>
      <Typography variant="caption" color={`primary.${mode}`}>
        Copyright © 2023 by Bruno Moisão. All rights reserved.{' '}
      </Typography>
    </Box>
  )
}

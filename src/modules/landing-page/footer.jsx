import { Box, Tooltip, Typography } from '@mui/material'
import { CustomIcon } from '../../components/icon'
import { ICONS } from '../../constants/icons'
import { openNewTab } from '../../utils/open-new-tab'

export const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom={10}
      mt={3}
      display="flex"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="caption" color="primary">
        Copyright © 2023 by Bruno Moisão. All rights reserved.{' '}
      </Typography>
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
        <Tooltip title="Github">
          <Box
            px={0.5}
            onClick={() => openNewTab('https://github.com/spars57')}
          >
            <CustomIcon src={ICONS.GITHUB} />
          </Box>
        </Tooltip>
      </Box>
    </Box>
  )
}

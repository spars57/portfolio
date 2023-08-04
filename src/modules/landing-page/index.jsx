import { Box, Divider, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { Header } from '../../components/header/header'
import { CustomIcon } from '../../components/icon'
import { ICONS } from '../../constants/icons'

const iconsMapper = [
  {
    icon: ICONS.REACT,
    label: 'ReactJS',
  },
  {
    icon: ICONS.MATERIALUI,
    label: 'Material UI',
  },
  {
    icon: ICONS.TYPESCRIPT,
    label: 'Typescript',
  },
  {
    icon: ICONS.NODE,
    label: 'Node JS',
  },
  {
    icon: ICONS.HTML5,
    label: 'HTML',
  },
  {
    icon: ICONS.CSS3,
    label: 'CSS',
  },
  {
    icon: ICONS.JAVA,
    label: 'Java',
  },
  {
    icon: ICONS.JAVASCRIPT,
    label: 'Javascript',
  },
]

export const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        justifyContent="center"
      >
        <Header />
        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" flexDirection="row">
            {iconsMapper.map(({ icon, label }) => (
              <Tooltip key={icon} title={label}>
                <Box px={1}>
                  <CustomIcon size={40} src={icon} />
                </Box>
              </Tooltip>
            ))}
          </Box>
          <Typography color="primary">
            Bruno Moisão - Fullstack Developer
          </Typography>
          <Divider />
        </Box>
      </Box>
    </>
  )
}

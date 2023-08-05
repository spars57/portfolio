import { Box, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { CustomIcon } from '../../components/icon'
import { ICONS } from '../../constants/icons'
import { Footer } from './footer'
import { LanguageComponent } from './language-component'

const iconsMapper = [
  {
    icon: ICONS.REACT,
    label: 'ReactJS',
    type: 'FE',
  },
  {
    icon: ICONS.MATERIALUI,
    label: 'Material UI',
    type: 'FE',
  },
  {
    icon: ICONS.TYPESCRIPT,
    label: 'Typescript',
    type: 'BE',
  },
  {
    icon: ICONS.TYPESCRIPT,
    label: 'Typescript',
    type: 'FE',
  },
  {
    icon: ICONS.NODE,
    label: 'Node JS',
    type: 'BE',
  },
  {
    icon: ICONS.HTML5,
    label: 'HTML',
    type: 'FE',
  },
  {
    icon: ICONS.CSS3,
    label: 'CSS',
    type: 'FE',
  },
  {
    icon: ICONS.JAVA,
    label: 'Java',
    type: 'BE',
  },
  {
    icon: ICONS.SPRING,
    label: 'Spring',
    type: 'BE',
  },
  {
    icon: ICONS.TAILWIND,
    label: 'Tailwind',
    type: 'FE',
  },
]

export const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Box display="flex" width="100%" flexDirection="column">
        <Box
          display="flex"
          width="100%"
          flexDirection="row"
          justifyContent="center"
        >
          <Box>
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light" />
          </Box>
          <Box display="flex" flexDirection="column" mt={4.5} ml={4}>
            <Typography variant="h4" color="secondary">
              About me
            </Typography>
            <Typography color="primary" variant="body1">
              I am a Fullstack Engineer based in Lisbon 🇵🇹
            </Typography>
            <Typography color="primary" variant="body1">
              This are the tecnologies I use for Frontend Development.
            </Typography>
            <Box display="flex" flexDirection="row" mt={1}>
              {iconsMapper
                .filter(({ type }) => type === 'FE')
                .map(({ icon, label }) => (
                  <Tooltip key={icon} title={label}>
                    <Box px={1}>
                      <CustomIcon size={40} src={icon} />
                    </Box>
                  </Tooltip>
                ))}
            </Box>
            <Typography color="primary" variant="body1">
              This are the tecnologies I use for Backend Development.
            </Typography>
            <Box display="flex" flexDirection="row" mt={1}>
              {iconsMapper
                .filter(({ type }) => type !== 'FE')
                .map(({ icon, label }) => (
                  <Tooltip key={icon} title={label}>
                    <Box px={1}>
                      <CustomIcon size={40} src={icon} />
                    </Box>
                  </Tooltip>
                ))}
            </Box>
          </Box>
        </Box>
        <Box mt={3}>
          <LanguageComponent emogi={'🇬🇧'} country={'English'} percentage={80} />
          <LanguageComponent
            emogi={'🇵🇹'}
            country={'Portuguese'}
            percentage={100}
          />
          <LanguageComponent emogi={'🇫🇷'} country={'French'} percentage={30} />
          <LanguageComponent emogi={'🇪🇸'} country={'Spanish'} percentage={40} />
        </Box>

        <Footer />
      </Box>
    </>
  )
}

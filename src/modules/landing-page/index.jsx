import { Box, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { CustomIcon } from '../../components/icon'
import { useMode } from '../../hooks/useMode'
import { Footer } from './footer'
import { ICONS_MAPPER } from './mappers'

export const LandingPage = () => {
  const navigate = useNavigate()
  const { mode } = useMode()

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
            <Typography variant="h4" color={`primary.${mode}`}>
              About me
            </Typography>
            <Typography color={`primary.${mode}`} variant="body1">
              I am a Fullstack Engineer based in Lisbon 🇵🇹
            </Typography>
            <Typography color={`primary.${mode}`} variant="body1">
              This are the tecnologies I use for Frontend Development.
            </Typography>
            <Box display="flex" flexDirection="row" mt={1}>
              {ICONS_MAPPER.filter(({ type }) => type === 'FE').map(
                ({ icon, label }) => (
                  <Tooltip key={icon} title={label}>
                    <Box px={1}>
                      <CustomIcon size={40} src={icon} />
                    </Box>
                  </Tooltip>
                )
              )}
            </Box>
            <Typography color={`primary.${mode}`} variant="body1">
              This are the tecnologies I use for Backend Development.
            </Typography>
            <Box display="flex" flexDirection="row" mt={1}>
              {ICONS_MAPPER.filter(({ type }) => type !== 'FE').map(
                ({ icon, label }) => (
                  <Tooltip key={icon} title={label}>
                    <Box px={1}>
                      <CustomIcon size={40} src={icon} />
                    </Box>
                  </Tooltip>
                )
              )}
            </Box>
          </Box>
        </Box>
        {/* <Box mt={3}>
          <LanguageComponent emogi={'🇬🇧'} country={'English'} percentage={80} />
          <LanguageComponent
            emogi={'🇵🇹'}
            country={'Portuguese'}
            percentage={100}
          />
          <LanguageComponent emogi={'🇫🇷'} country={'French'} percentage={30} />
          <LanguageComponent emogi={'🇪🇸'} country={'Spanish'} percentage={40} />
        </Box> */}

        <Footer />
      </Box>
    </>
  )
}

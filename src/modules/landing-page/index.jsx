import { Box, Tooltip, Typography } from '@mui/material'
import { CustomIcon } from '../../components/icon'
import { EXPERIENCE_START_DATE } from '../../constants/experience'
import { useMode } from '../../hooks/useMode'
import { Footer } from './footer'
import { ICONS_MAPPER } from './mappers'

function getDateDifferenceString(targetDate) {
  const currentDate = new Date()
  const oldDate = new Date(targetDate)
  const diffTime = Math.abs(currentDate - oldDate)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  var years = Math.floor(diffDays / 365)
  var months = Math.floor((diffDays % 365) / 30)
  var days = Math.floor((diffDays % 365) % 30)

  var yearsDisplay =
    years > 0 ? years + (years == 1 ? ' year ' : ' years ') : ''
  var monthsDisplay =
    months > 0 ? months + (months == 1 ? ' month and ' : ' months and ') : ''
  var daysDisplay = days > 0 ? days + (days == 1 ? ' day' : ' days') : ''
  return yearsDisplay + monthsDisplay + daysDisplay
}

export const LandingPage = () => {
  const { mode } = useMode()

  return (
    <>
      <Box display="flex" width="100%" flexDirection="column">
        <Box
          mt={2}
          display="flex"
          width="100%"
          flexDirection="row"
          justifyContent="center"
        >
          <Box>
            {/* <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light" /> */}
            <img
              src="/src/assets/pfp.png"
              width={250}
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Box display="flex" flexDirection="column" mt={1} ml={4}>
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
        <Box
          bgcolor={`secondary.${mode}`}
          display="flex"
          width="100%"
          flexDirection="row"
          justifyContent={'center'}
        >
          <Box display="flex" flexDirection="column" justifyContent={'center'}>
            <Box display="flex" width="100%" justifyContent={'center'}>
              <Typography
                fontWeight={'bold'}
                m={1}
                style={{ fontSize: 20 }}
                color={`primary.${mode}`}
              >
                My education
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={'row'}
          width="100%"
          bgcolor={`primary.${mode}`}
        >
          <Box m={2} mt={3} display="flex" flexDirection="column">
            <img
              src="https://estudeemportugal.org/storage/2020/04/ual.jpg"
              width={600}
              onClick={() => window.open('https://autonoma.pt/en/', '_blank')}
              title="UAL - Autonomous University of Lisbon"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={'left'}
            m={2}
          >
            <Typography variant="h6" mt={1} color={`secondary.${mode}`}>
              Autonomous University of Lisbon (2022-2026)
            </Typography>
            <Typography variant="subtitle2" mt={1} color={`secondary.${mode}`}>
              Bachelor Degree on Computer Science
            </Typography>
            <Typography
              textAlign={'justify'}
              variant="body1"
              mt={1}
              color={`secondary.${mode}`}
            >
              In October 2022, I embarked upon my academic journey with a
              resolute commitment to attain a Bachelor&apos;s degree in Computer
              Science by the year 2026. To date, I have successfully traversed
              27% of the comprehensive curriculum.
              <br /> <br />
              This expedition has proven to be a remarkably enriching
              experience, characterized by the acquisition of a substantial
              corpus of technical knowledge. Moreover, this academic pursuit has
              invariably catalyzed my personal maturation and growth.
              <br /> <br />
              My decision to undertake this formidable odyssey was motivated by
              a profound aspiration to simultaneously navigate the realm of
              full-time employment while earnestly pursuing an Engineering
              degree. Through this endeavor, I seek to not only substantiate my
              capabilities in surmounting intricate challenges but also to
              affirm my adeptness in conquering rigorous academic feats.
            </Typography>
          </Box>
        </Box>
        <Box
          mt={0.1}
          display="flex"
          flexDirection={'row'}
          width="100%"
          bgcolor={`primary.${mode}`}
        >
          <Box
            m={2}
            display="flex"
            flexDirection="column"
            justifyContent={'left'}
          >
            <Typography variant="h6" mt={1} color={`secondary.${mode}`}>
              Professional High School (2019-2022)
            </Typography>
            <Typography variant="subtitle2" mt={1} color={`secondary.${mode}`}>
              3 Year programming course
            </Typography>
            <Typography
              textAlign={'justify'}
              variant="body1"
              mt={1}
              color={`secondary.${mode}`}
            >
              In the year 2019, I embarked upon my high school education, albeit
              through a non-conventional trajectory. Recognizing the potential
              benefits of a vocational course, I diverged from the traditional
              academic path, envisioning that it would equip me with a
              heightened readiness for the dynamic demands of the professional
              arena.
              <br />
              <br />
              During this period, I was introduced to the realm of
              programming—an encounter that engendered an immediate and enduring
              fascination. From the very inception of my coding endeavors, an
              undeniable ardor ignited within me, a passion that has steadfastly
              burned ever since.
              <br />
              <br />
              This educational pursuit played an instrumental role in
              facilitating my entry into the workforce at the tender age of 19,
              wherein I assumed the mantle of a Software Engineer. This
              accomplishment stands as a testament to the efficacy of the path I
              chose and the fortuity of discovering an abiding vocation that
              resonates deeply with me.
            </Typography>
          </Box>
          <Box m={2} display="flex" flexDirection="column">
            <img
              src="https://www.freguesiaalenquer.pt/images/freguesia/colectividades/20/1622036858imagem_20.jpg"
              width={600}
              onClick={() => window.open('https://autonoma.pt/en/', '_blank')}
              title="UAL - Autonomous University of Lisbon"
            />
          </Box>
        </Box>
        <Box
          mt={1}
          bgcolor={`secondary.${mode}`}
          display="flex"
          width="100%"
          flexDirection="row"
          justifyContent={'center'}
        >
          <Box display="flex" flexDirection="column" justifyContent={'center'}>
            <Box display="flex" width="100%" justifyContent={'center'}>
              <Typography
                fontWeight={'bold'}
                style={{ fontSize: 20 }}
                color={`primary.${mode}`}
              >
                My professional experience
              </Typography>
            </Box>
            <Box display="flex" width="100%" justifyContent={'center'}>
              <Typography color={`primary.${mode}`}>
                {getDateDifferenceString(EXPERIENCE_START_DATE)}
              </Typography>
            </Box>
            <Box display="flex" width="100%" p={5} justifyContent={'center'}>
              <Typography color={`primary.${mode}`}>comming soon...</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

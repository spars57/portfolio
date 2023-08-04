import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <Box
      display="flex"
      flexDirection="row"
      width={'100%'}
      justifyContent="center"
    >
      <Box px={1}>
        <Typography onClick={() => navigate('/')} color="primary" to="about">
          About
        </Typography>
      </Box>
      <Box px={1}>
        <Typography onClick={() => navigate('/')} color="primary" to="about">
          Projects
        </Typography>
      </Box>
      <Box px={1}>
        <Typography onClick={() => navigate('/')} color="primary" to="about">
          Contact
        </Typography>
      </Box>
    </Box>
  )
}

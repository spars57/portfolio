import { Box, Grid, LinearProgress, Typography } from '@mui/material'

export const LanguageComponent = ({ country, percentage, emogi }) => {
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="row"
      justifyContent="center"
    >
      <Box width="30%" display="flex" flexDirection="row" alignItems="center">
        <Box display="flex" flexDirection="row" mr={1}>
          <Typography variant="body1" color="primary" mr={1}>
            {country}
          </Typography>
          {emogi}
        </Box>
        <Grid spacing={1} container>
          <Grid xs item>
            <LinearProgress
              value={percentage}
              variant="determinate"
              color="primary"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

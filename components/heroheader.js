import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const SubTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3Jp,
  textAlign: 'left',
  marginBottom: '1rem',
  marginTop: 0,
}))



const HeroHeader = () => {
  return (
    <>
      <Grid 
        direction="row"
        justifyContent="center"
        alignItems="center"
        container 
        spacing={2}
        sx={{
        width: '100%',
        margin:0,
        height: '100vh',
        background: "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)",
      }}>
        <Grid 
          item
          xs={6} 
          md={5}
          container
          >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin:"auto"
          }}>
            <Typography variant="h2" component="h1">
              Webサイト制作・デザインのsetsuna
            </Typography>
            <Typography variant="subtitle1" component="span">
              Webサイトも人生も勝負は一瞬。やるなら「速い」ほうがいい。
            </Typography>
          </Box>
        </Grid>
        <Grid 
          item 
          xs={6}
          md={7}
          direction="row"
          justifyContent="flex-end"
          textAlign="right"
          >
          <Image 
            src='/images/fv-tv.svg'
            width={721}
            height={610}
            alt="hikakin-tv"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default HeroHeader
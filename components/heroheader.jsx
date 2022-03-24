import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import styled from '@emotion/styled'

//emotion styled
const TypoH1 = styled.h1`
  font-size: 2.5rem;
  font-family: 'MuseoModerno';
  font-weight: 600;
  line-height: 3.2rem;
`;
const TypoSub1 = styled.span`
  font-size: 1rem;
  font-family: 'Zen Kaku Gothic Antique';
  font-weight: 700;
`;
//emotion styled end

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
            justifyContent: 'flex-start',
            margin:"auto",
            textAlign: 'left',
          }}>
            <TypoH1>
              Webサイト制作・デザインのsetsuna
            </TypoH1>
            <TypoSub1 >
              Webサイトも人生も勝負は一瞬。やるなら「速い」ほうがいい。
            </TypoSub1>
          
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
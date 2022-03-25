import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import styled from '@emotion/styled'

//emotion styled
const TypoH1 = styled.h1`
  font-size: 2.1rem;
  font-family: 'Zen Kaku Gothic Antique';
  font-weight: 600;
  line-height: 1rem;
`;
const TypoSub1 = styled.span`
  font-size: 0.9rem;
  font-family: 'Zen Kaku Gothic Antique';
  font-weight: 400;
`;

const HikakinTv = styled.div`
 padding-top: 5rem;
 padding-left: 14rem;
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
        height: '100vh',
        margin:0,
        background: "linear-gradient(.25turn, rgba(83,120,201,1) 0%, rgba(5,8,43,1) 67%)",
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
            pl: 1,
            pt: 1,
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
          direction="column"
          justifyContent="flex-end"
          textAlign="right"
        >
        <HikakinTv>
          <Image 
            src='/images/fv-tv.svg'
            width={854}
            height={721}
            layout='intrinsic'
            alt="hikakin-tv"
          />
        </HikakinTv>
        </Grid>
      </Grid>
    </>
  )
}

export default HeroHeader
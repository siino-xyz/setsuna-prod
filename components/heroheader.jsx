import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import styled from '@emotion/styled'

//emotion styled
const TypoH1 = styled.h1`
  font-size: 2.1rem;
  font-family: 'Zen Kaku Gothic Antique';
  font-weight: 700;
  line-height: 1rem;
`;
const TypoSub1 = styled.span`
  font-size: 0.9rem;
  font-family: 'Zen Kaku Gothic Antique';
  font-weight: 400;
`;

const HikakinTv = styled.div`
 padding-top: 5rem;
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
        position: 'sticky',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        overFlow: 'hidden',
        margin:0,
        zIndex: '-123',
        background: '#121212',
        userSelect: 'none',
      }}>
        {/* <Grid 
          item
          xs={12} 
          md={6}
          container
          >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin:"auto",
            textAlign: 'left',
            pl: 0,
            pt: 1,
          }}>
            <TypoH1>
            Webサイトも人生も勝負は一瞬。
            </TypoH1>
            <TypoH1>
            やるなら「速い」ほうがいい。
            </TypoH1>
          </Box>
        </Grid> */}

        <Grid 
          item 
          xs={12}
          md={12}
          direction="column"
          justifyContent="center"
          textAlign="center"
        >
        <HikakinTv>
          <Image 
            src='/logo/bg-logo.svg'
            width={388}
            height={486}
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
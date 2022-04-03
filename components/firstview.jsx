import Grid from '@mui/material/Grid'
import Image from 'next/image'
import styled from '@emotion/styled'


const HikakinTv = styled.div`
 padding-top: 5rem;
`;
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
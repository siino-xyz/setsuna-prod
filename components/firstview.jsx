import Stack from '@mui/material/Stack'
import Image from 'next/image'
import styled from '@emotion/styled'


const HikakinTv = styled.div`
 padding-top: 5rem;
 @media (max-width:600px) {
    padding-top: 0;
    width: 70%;
  }
`;
const HeroHeader = () => {
  return (
    <>
      <Stack 
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

        <HikakinTv sx={{
          mx: 'auto',
  
        }}>
          <Image 
            src='/logo/bg-logo.svg'
            width={388}
            height={486}
            layout='intrinsic'
            alt="hikakin-tv"
          />
        </HikakinTv>
      </Stack>
    </>
  )
}

export default HeroHeader
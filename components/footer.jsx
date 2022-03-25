import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

const Typography = styled.span`
  font-size: 12px;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  font-weight: 400;
`;

 const Footer = () => {
  return (
    <Box sx={{ 
      flexGrow: 1,
      width: '100%',
      pt: 2,
      pb: 2,
      px: 2,
      mt: 5,
      mb: 0,
      mx: 0,
      background: '#292929',
    }}>
      <Grid 
        spacing={0}
        container 
        direction="row"
        justifyContent="left"
        alignItems="center">
        <Grid item xs={12} md={2}>
          <Box sx={{
            px: 0,
            py: 0,
            "@media screen and (max-width:400px)": {
                    textAlign: 'center',
                  },
          }}>
            <Link href='/' passHref>
              <a>
                <Image 
                  src="/logo/f-l.svg" 
                  width={295} height={99} 
                  alt='setsuna-logo'
                  layout='intrinsic'
                />
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={8} sx={{
          textAlign: 'center',
        }}>
          <Typography varitant='subtitle1' component='span'>
            ©copylight setsuna all lights.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}


export default Footer
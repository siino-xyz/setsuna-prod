import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Link from 'next/link'
import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',n
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

 const Footer = () => {
  return (
    <Box sx={{ 
      flexGrow: 1,
      width: '100%',
      pt: 1,
      pb: 1,
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
        justifyContent="center"
        alignItems="center">
        <Grid item xs={4} md={3}>
          <Box sx={{
            px: 0,
            py: 0,
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

        <Grid item xs={4} md={6}>
          <Box sx={{
            textAlign: 'center'
          }}>
            <Link href='https://twitter.com/siino_webdev' passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image 
                src="/icons/twitter-logo.svg" 
                width={35} height={35}f
                alt="twitter-logo"
                layout='intrinsic'
              />
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={4} md={3}>
          <Box>
            <Grid 
              spacing={1}
              container
              justifyContent="center"
              alignItems="center"
              columns={{ xs: 4, md: 12 }}
            >
              <Grid item xs={2} md={3}>
                <Image
                src='/icons/nextjs-logo.svg'
                width={60}
                height={36}
                alt='nextjs-logo'
                layout='intrinsic'
                />
              </Grid>
              <Grid item xs={2} md={2} sx={{
                textAlign: 'center',
              }}>
                <Image
                src='/icons/materialui-logo.svg'
                width={26}
                height={26}
                alt='materialui-logo'
                layout='intrinsic'
                />
              </Grid>
              <Grid item xs={2} md={3}>
              <Image
                src='/icons/microcms-logo.svg'
                width={110}
                height={22}
                alt='microcms-logo'
                layout='intrinsic'
                />
              </Grid>
              <Grid item xs={2} md={3}>
              <Image
                src='/icons/vercel-logo.svg'
                width={89}
                height={20}
                alt='vercel-logo'
                layout='intrinsic'
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}


export default Footer
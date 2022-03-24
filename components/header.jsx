import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'


//mui
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';


const Item = (props) => {
  const { sx, ...other} = props;
  return (
    <Box 
      sx={{
        pr: 1,
        pl: 1,
        backgroundColor: 'secoundary.main',
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    />
  )
}

const RedLink = styled.a`
  color: red;
  cursor: pointer;
`;



const Header = () => {
  return (
        <Box sx={{ 
          flexGrow: 1,      
        }}>
          <AppBar position="fixed" color="warning" sx={{ 
            backgroundColor: 'palette.primary.light',
            boxShadow: 'none',
            backdropFilter: 'blur(2px)',
            py: 0.5,
            px: 2,
            mt: 0,
          }}>
            <Box sx= {{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <Link href='/' passHref>
              <RedLink>
                <Image 
                  src="/logo/setsuna-logo-typo.svg" 
                  width={192} height={63} 
                  alt='setsuna-logo'
                  layout='intrinsic'
                />
              </RedLink>
            </Link>
            <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  pr: 0.1,
                  pl: 0.1,
                  m: 1,
                  bgcolor: 'secoundary.main',
                  
                }}
              >
                <Item>
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
                </Item>
                <Item>
                  <Image 
                  src="/icons/contact-icon.svg" 
                  width={35} height={35} 
                  alt="email-icon"
                  layout='intrinsic'
                  />
                </Item>
              </Box>
            </Box>
          </AppBar>
        </Box>   
  )
}


export default Header




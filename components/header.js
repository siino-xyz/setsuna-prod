import Image from 'next/image'
import Link from 'next/link'


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
            <Image src="/logo/setsuna-logo-typo.svg" width={192} height={63} alt='setsuna-logo'/>
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
                  <Image src="/icons/twitter-logo.svg" width={35} height={35} alt="twitter-logo"/>
                </Item>
                <Item>
                  <Image src="/icons/contact-icon.svg" width={35} height={35} alt="email-icon"/>
                </Item>
              </Box>
            </Box>
          </AppBar>
        </Box>   
  )
}


export default Header




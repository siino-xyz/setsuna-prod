import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'


//mui
import Box from '@mui/material/Box';



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

//emotion styled
const RedLink = styled.a`
  color: red;
  cursor: pointer !important;
`;
const AppBar = styled.div`
  display: flex;
  flex-direction: ;
  justify-content: space-between;
  background-color: rgba(0,0,0,0);
  backdrop-filter: blur(4px);
  position: fixed;
  padding: 0.4rem 1rem 0 1rem;
  width: 100%;
  z-index: 999;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
//emtion styled end

const Header = () => {
  return (
        <Box sx={{ 
          flexGrow: 1,      
        }}>
          <AppBar>
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
            <IconWrapper>
              <Item>
                <Link href='https://twitter.com/siino_webdev' passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/icons/twitter-logo.svg" 
                    width={35} 
                    height={35}f
                    alt="twitter-logo"
                    layout='intrinsic'
                  />
                  </a>
                </Link>
              </Item>
              <Item>
              <Link href='https://twitter.com/siino_webdev' passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image 
                  src="/icons/contact-icon.svg" 
                  width={35} 
                  height={35} 
                  alt="email-icon"
                  layout='intrinsic'
                  />
                </a>
              </Link>
              </Item>
            </IconWrapper>
          </AppBar>
        </Box>   
  )
}


export default Header




import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as React from 'react'
import ReactDOM from "react-dom";

//mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'

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
  margin: 0.5rem 1rem;
`;
const AppBar = styled.div`
  display: flex;
  flex-direction: ;
  justify-content: space-between;
  background-color: #121212;
  ${'' /* backdrop-filter: blur(4px); */}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  @media (max-width: 420px) {
        padding: 0.4rem 1rem 0 0;
      }
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;
const MenuItem = styled.div`
  font-family: 'Zen Kaku Gothic Antique';
  font-weight: 700;
  font-size: 1rem;
  color: #EEEEEE;
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
                  src="/logo/se-minilogo.svg" 
                  width={65} height={82} 
                  alt='setsuna-logo'
                  layout='intrinsic'
                />
              </RedLink>
            </Link>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >

              <AnchorLink href="#services">
                <MenuItem>
                  Services
                </MenuItem>
              </AnchorLink>

              <AnchorLink href="#profile">
                <MenuItem>
                  Profile
                </MenuItem>
              </AnchorLink>

              <Link href="/contact" passHref>
                <a>
                  <MenuItem>
                    Contact
                  </MenuItem>
                </a>
              </Link>

              <Link href='/blog' passHref>
                <a>
                  <MenuItem>
                    Blog
                  </MenuItem>
                </a>
              </Link>
             
            </Stack>


            <IconWrapper>
              <Item>
                <Link href='https://twitter.com/siino_webdev' passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/icons/twitter-logo.svg" 
                    width={35} 
                    height={35}
                    alt="twitter-logo"
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




import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'


const AppBar = styled.div`
  display: flex;
  flex-direction: ;
  justify-content: space-between;
  background-color: rgba(0,0,0,0);
  backdrop-filter: blur(4px);
  padding: 0.4rem 1rem 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

const Totoplink = styled.a`
  text-decoration: none;
  cursor: pointer !important;
`
const ToTopBtn = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.2rem;
  background-color: #F37D27;
  color: #EEEEEE;
  outline: none;
  border: none;
  box-shadow: none;
  cursor: pointer !important;
  font-family: 'MuseoModerno';
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01rem;
`;

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


const BlogHeader = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const quotation = `'`
 
  return (
    <Box sx={{ 
      flexGrow: 1,      
    }}>
      <AppBar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing="1"
          sx={{
          }}>

            
          <Grid item>
          <Link href='/blog' passHref>
          <a>
            <Image 
              src="/logo/blog-h.svg" 
              width={210} height={70} 
              alt='setsuna-logo'
              layout='intrinsic'
            />
          </a>
        </Link>
          </Grid>



    
          {/* <Grid item>
            <Link href="/" passHref>
              <Totoplink target="_blank" rel="noopener noreferrer">
                <ToTopBtn>
                 {`What${quotation}s setsuna?`}
                </ToTopBtn>
              </Totoplink>
            </Link>
          </Grid> */}
        </Grid>
      </AppBar>
    </Box>   
  )
}


export default BlogHeader





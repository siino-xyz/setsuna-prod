import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';






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

const Totoplink = styled.a`
  text-decoration: none;
`



const BlogHeader = (category) => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
        <Box sx={{ 
          flexGrow: 1,      
        }}>
          <AppBar position="static" color="warning" sx={{ 
            backgroundColor: 'palette.primary.light',
            boxShadow: 'none',
            backdropFilter: 'blur(2px)',
            py: 0.5,
            px: 2,
            mt: 0,
          }}>
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
                  src="/logo/setsuna-logo-blog.svg" 
                  width={192} height={63} 
                  alt='setsuna-logo'
                  layout='intrinsic'
                />
              </a>
            </Link>
              </Grid>



              <Grid item md={6}>
      
              </Grid>

              <Grid item>
                <Link href="/" passHref>
                  <Totoplink target="_blank" rel="noopener noreferrer">
                    <Button
                    variant="contained" 
                    color='success'
                    font='h1'
                    sx={{
                      color:'#ffffff',
                      lineHeight: '2rem'
                    }}
                    >
                      setsunaについて
                    </Button>
                  </Totoplink>
                </Link>
              </Grid>
            </Grid>
          </AppBar>
        </Box>   
  )
}


export default BlogHeader





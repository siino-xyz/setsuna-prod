import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'


import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography'
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




const BlogHeader = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
        <Box sx={{ 
          flexGrow: 1,      
        }}>
          <AppBar position="fixed" sx={{ 
            backgroundColor: 'palette.background.default',
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
               <Image src="/logo/setsuna-logo-blog.svg" width={192} height={63} alt='setsuna-logo'/>
              </Grid>

              <Grid item md={6}>
                <Box sx={{ 
                  width: '100%',
                }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    centered
                    >
                      <Tab icon={<FiberNewIcon />} value="one" iconPosition="start" label="新着"/>
                      <Tab icon={<OfflineBoltIcon />} value="two" iconPosition="start" label="人気"/>
                      <Tab value="three" label="プログラミング" />
                      <Tab value="four" label="デザイン" />
                  </Tabs>
                </Box>
              </Grid>

              <Grid item>
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
              </Grid>
            </Grid>
          </AppBar>
        </Box>   
  )
}


export default BlogHeader





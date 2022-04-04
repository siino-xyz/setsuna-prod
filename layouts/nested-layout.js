import Box from '@mui/material/Box';

const NestedLayout = ({children, index}) => {
  return (
    <>  
    {index ? (<>
      <Box sx={{
        maxWidth: 1050,
        width: '85%',
        mx: 'auto',
        my: 0,
        pb: 10,
        backgroundColor: 'rgba(18, 18, 18, 0.95)',
        backdropFilter: 'blur(6px)',

        "@media screen and (max-width:600px)": {
          width: "100%",
          display: '',
          px: 2,
        },
      }}>
        <main>{children}</main>
      </Box>

    </>):(<>
      <Box sx={{
          maxWidth: 944,
          width: '90%',
          mx: 'auto',
          my: 3,
          "@media screen and (max-width:400px)": {
            width: '95%',
            },
        }}>
          <main>{children}</main>
        </Box>
    </>)} 

    </>
  )
}

export default NestedLayout
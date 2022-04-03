import Box from '@mui/material/Box'

export const InnerWidth = ({children}) => {
  return (
    <>
      <Box sx={{
        pb: 5,
        maxWidth:'100%',
        mx: 'auto',
        my: 10,
      }}>
        {children}
      </Box>
    </>
  )
}

export default InnerWidth 
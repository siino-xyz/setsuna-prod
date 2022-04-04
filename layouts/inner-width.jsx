import Box from '@mui/material/Box'

export const InnerWidth = ({children}) => {
  return (
    <>
      <Box sx={{
        maxWidth:860,
        mx: 'auto',
      }}>
        {children}
      </Box>
    </>
  )
}

export default InnerWidth 
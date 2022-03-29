import { Typography } from "@mui/material";
import Box from '@mui/material/Box'

const SectionText = (props) => {
  return (
    <Box sx={{
      pb: 0,
      maxWidth: 700,
      mx: 'auto',
    }}>
      <Typography 
      variant='body1'
      component='p'
      sx= {{
        mx: 'auto',
        my: 0,
        marginTop: '0px !important',
        textAlign: 'center',
        maxWidth: '100%',
        whiteSpace: 'normal',
      }}
      >
        {props.sectiontext}
      </Typography>
    </Box>
  )
}

export default SectionText
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const InnerTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.common.black,
  backgroundColor: '#C7C7C7',
  textAlign: 'left',
  display: 'inline-block !important',
  marginTop: 0,
  borderRadius: '0.11rem',
}))

const SubTitle = (props) => {
  return (
    <InnerTitle 
    component="h3"
    sx={{
      px: 0.8,
      py: 0.2,
      my: 1,
      display: 'inline-block !important',
    }}>
      {props.subtitle}
    </InnerTitle>
  )
}

export default SubTitle
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const SubTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,
  textAlign: 'left',
  display: 'inline-block',
  marginTop: 0,
  borderRadius: '0.11rem',
}))

const InnerTitle = (props) => {
  return (
    <SubTitle 
    component="h3"
    sx={{
      px: 0.8,
      py: 0.7,
      my: 1,
    }}>
      {props.innertitle}
    </SubTitle>
  )
}

export default InnerTitle
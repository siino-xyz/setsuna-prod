import { Typography } from "@mui/material";

const SectionTitle = (props) => {
  return (
    <Typography 
    variant='h2'
    component='h2'
    color='common.black'
    sx= {{
      mb: 6,
      mt: 12,
      textAlign: 'left',
      backgroundColor: 'common.white',
      px: 1,
      py: 0.6,
      display: 'inline-block',
      borderRadius: '0.11rem',
    }}
    >
      {props.sectiontitle}
    </Typography>
  )
}

export default SectionTitle
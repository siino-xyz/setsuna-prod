import { Typography } from "@mui/material";

const SectionTitle = (props) => {
  return (
    <Typography 
    variant='h2'
    component='h2'
    color='common.black'
    sx= {{
      mb: 3,
      mt: 17,
      textAlign: 'left',
      backgroundColor: 'common.white',
      px: 2,
      py: 1,
      display: 'inline-block',
    }}
    >
      {props.sectiontitle}
    </Typography>
  )
}

export default SectionTitle
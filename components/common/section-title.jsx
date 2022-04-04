import { Typography } from "@mui/material";

const SectionTitle = (props) => {
  return (
    <Typography 
    variant='h2'
    component='h2'
    color='common.black'
    sx= {{
      mb: 5,
      mt: 10,
      textAlign: 'left',
      backgroundColor: 'common.white',
      px: 0.7,
      py: 0.2,
      display: 'inline-block',
      borderRadius: '0',
    }}
    >
      {props.sectiontitle}
      

    </Typography>
  )
}

export default SectionTitle
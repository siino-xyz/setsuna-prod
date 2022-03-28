import { Typography } from "@mui/material";

const SectionText = (props) => {
  return (
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
  )
}

export default SectionText
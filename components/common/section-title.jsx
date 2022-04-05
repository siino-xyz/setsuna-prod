import { Typography } from "@mui/material";

const SectionTitle = (props) => {
  return (
    <Typography 
    variant='h2'
    component='h2'
    color='common.black'
    sx= {{
      mb: 2,
      mt: 10,
      textAlign: 'left',
      backgroundColor: 'common.white',
      px: 0.7,
      py: 0,
      display: 'inline-block',
      borderRadius: '0',
      "@media screen and (max-width:600px)": {
        mb: 5,
        mt: 8,
        display: 'inherit',
      },
    }}
    >
      {props.sectiontitle}
      <Typography
      variant='subtitle2'
      component='h2'
      color='common.black'
      sx= {{
        py: 0,
        my: 0,
        "@media screen and (max-width:600px)": {

        },
      }}>
      {props.subscript}
      </Typography>
    </Typography>
  )
}

export default SectionTitle
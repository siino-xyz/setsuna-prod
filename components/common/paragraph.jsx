import  Typography  from "@mui/material/Typography";



const Paragraph = (props) => {
  return (
    <Typography variant='body1' component='p' sx={{
        
    }}>
      {props.paragraph}
    </Typography>
  )
}

export default Paragraph





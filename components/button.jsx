import Button from "@mui/material/Button";
import Box from '@mui/material/Box'
import Link from 'next/link'


const LinkButton = (props) => {
  return (
    <Box sx={{
      width: '100%',
      mx: 'auto',
      my: 3,
      textAlign: 'center',
    }}>
    <Link href={`/${props.url}`} passHref>
      <Button 
      variant="outlined"
      sx={{
        margin: 'auto',
        textAlign: 'center',
      }}>
        {props.button}
      </Button>
    </Link>
    </Box>
  )
}

export default LinkButton
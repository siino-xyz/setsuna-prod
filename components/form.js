import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Input = (props) => {
  const { sx, ...other } = props
  return (
  <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    {...other}
  />
  )
}

const Form = ()  => {
  return (
    <> 
      <Input>
        <TextField fullWidth label="fullWidth" id="fullWidth" color="secondary"  sx={{
        }}/>
      </Input>
      <Input>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Input>
      <Input>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Input>
    </>
  );
}

export default Form
import * as React from 'react';
import Link from 'next/link'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'

import Button from '@mui/material/Button';




export default function MultilineTextFields() {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 600,
        justifyContent:'center',
        textAlign: 'center',
        alignItems: 'center',
        mx: 'auto',
        my: '4'
      }}
      noValidate
      autoComplete="off"
    >

      <Box sx={{
          width: '100%',

          '& .MuiTextField-root': { 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          my: 5,
          },
      }}>
        <TextField
          id="filled-textarea"
          label="ご担当者様のお名前（必須）"
          multiline
          variant="filled"

        />
        <TextField
          id="filled-textarea"
          label="受信可能なメールアドレス（必須）"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="ご用件の内容（必須）"
          multiline
          rows={4}
          variant="filled"
        />
      </Box>

      <Link href='/thanks'>
        <Button
              variant="contained" 
              color='success'
              font='h1'
              sx={{
                color:'#F4F4F4',
                lettterSpacing: '0.5rem',
                lineHeight: '2rem',
                margin: 'auto',
                paddingRight: '5rem',
                paddingLeft: '5rem',
              }}
            >
              送信
        </Button>
      </Link>
    </Box>
  );
}
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import type { InferType } from "yup";


import Link from 'next/link'

// フォームの型
interface SampleFormInput {
  email: string
  name: string
}

// バリデーションルール
const schema = yup.object({
  email: yup
    .string()
    .required('必須です')
    .email('正しいメールアドレスを入力してください'),
  name: yup.string().required('必須です'),
})

const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }
   = useForm<SampleFormInput>({
    resolver: yupResolver(schema),
  })

  type Schema = InferType<typeof schema>;
 

  // フォーム送信時の処理
  const onSubmit = async (data: Schema) => {}
  
  

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Stack spacing={3}>

        <form onSubmit = {handleSubmit(onSubmit)}>

        <TextField
          required
          label="メールアドレス"
          variant="filled"
          {...register('email')}
          error={'email' in errors}
          helperText={errors.email?.message}
        />

        <TextField 
          label="お名前"
          {...register('name')}
          error={'name' in errors}
          helperText={errors.name?.message}
          multiline
          variant="filled"
        />

        <TextField
          label="ご用件の内容"
          multiline
          rows={4}
          variant="filled"
        />


          <Button
            color="primary"
            variant="contained"
            size="large"
            // onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            送信
          </Button>
        </form>

      </Stack>
    </Container>
  )
}

export default InputForm
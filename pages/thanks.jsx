import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/header'
import Layout from '../components/layout'

import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button';


const LargeText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  textAlign: 'center',
  my: 5,
  mx: 'auto',
}))

const Prag = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  marginTop: '1rem',
  textAlign: 'center',
  paddingBottom: '4rem'
}))


const ThanksPage = () => {
  return (
    <>
    <Header />
    <Layout>
      <Box sx={{
        height: '100vh',
        width: '80%',
        maxWidth: 710,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        mx: 'auto',
        pl: 5     
      }}>
        <Stack 
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
     
        >
          <Image 
            src='/icons/plane-icon.svg'
            width={248}
            height={136}
            alt='mail_send_complate'
          />

          <LargeText components="span">
            お問い合わせ頂き、ありがとうございます。
          </LargeText>
          <Prag components="span">
            setsunaへお問い合わせ頂きありがとうございます。<br />
            原則１営業日以内に折り返しご連絡致しますので、今しばらくお待ち下さい。
          </Prag>
        
          <Link href='/' passHref>
            <Button
              variant="contained" 
              color='success'
              font='h1'
              sx={{
                color:'#ffffff',
                lineHeight: '2rem',
              }}
            >
              トップページに戻る
            </Button>
          </Link>

        </Stack>
      </Box>
    </Layout>
    </>
  )
}


export default ThanksPage

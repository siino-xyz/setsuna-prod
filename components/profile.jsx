import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';

const Prag = styled(Typography)(({ theme }) => ({
  ...theme.typography.smallParagraph,
  // marginTop: '1rem'
}))

const Profile = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // mb: 10,
        // mt: 5,
        mx: 'auto',
        width: '100%',
        maxWidth: 420
      }}>
        <Box sx={{
          maxWidth: 250,
          mx: 'auto',
          textAlign: 'center'
        }}>
          <Image 
            src='/images/about-1.png'
            width={175}
            height={175}
            alt='about-1'
            />
        </Box>
        <Prag sx={{
          textAlign: 'center'
        }}>
          siino
        </Prag>
        <Prag>
          鳥取県出身の1995/04/27生まれ。<br />
          今は大坂でフリーランスエンジニア/デザイナーをやっています。<br />
          昔はテレビ局の報道部門で働いていたりしました。
        </Prag>
        <Prag>
          何かを作ったり、ものを考えたりすることが得意です。 <br />
          趣味はギターと自作キーボードとWikipedia巡り。
        </Prag>
      </Box>
    </>
  )
}

export default Profile
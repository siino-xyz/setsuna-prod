import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import Paragraph from './common/paragraph'


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
        
        <Paragraph 
          paragraph={'siino'}
        />
          
        <Paragraph 
          paragraph={'鳥取県出身の1995/04/27生まれ。今は大坂でフリーランスエンジニア/デザイナーをやっています。昔はテレビ局の報道部門で働いていたりしました。'}
        />

        <Paragraph 
          paragraph={'何かを作ったり、ものを考えたりすることが得意です。趣味はギターと自作キーボードとWikipedia巡り。'}
        />

      </Box>
    </>
  )
}

export default Profile
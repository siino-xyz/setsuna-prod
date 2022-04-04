import Image from 'next/image'
import Box from '@mui/material/Box'
import SubTitle from './common/sub-title'
import InnerWidth from '../layouts/inner-width'

const Profile = () => {
  return (
    <InnerWidth>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mx: 'auto',
        alignItems: 'baseline'
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
        <SubTitle 
          subtitle={'siino'}
        />
        <p>鳥取県出身の1995/04/27生まれ。今は大坂でフリーランスエンジニア/デザイナーをやっています。昔はテレビ局の報道部門で働いていたりしました。何かを作ったり、ものを考えたりすることが得意です。<br />趣味はギターと自作キーボードとWikipedia巡り。</p>

      </Box>
    </InnerWidth>
  )
}

export default Profile
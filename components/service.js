import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import InnerTitle from './common/sub-title'
import Paragraph from './common/paragraph'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0.5),
  textAlign: 'left',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.warning.main,
  boxShadow: 'none',
  paddingBottom: '2rem',
}));




const Service = () => {
  return (
    <Box sx={{ 
      flexGrow: 1,
      mt: '2rem',
    }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={5}>
          <Item>
            <InnerTitle
              innertitle={'Jamstackを用いたハイパフォーマンスなサイト構築'}
            />

            <Paragraph 
              paragraph={'jamstack （ジャムスタック）とは、J・A・M（JavaScript・API・Markup）の頭文字をとった、比較的新しいウェブサイト構築手法です。従来のサイト構築と異なり、特定のサーバを持たないことが大きな特徴です。'} 
            />

            <Paragraph 
              paragraph={'jamstackを導入することで、高いユーザ体験と快適な運用体制を低コストで実現することができます。'}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={7}>
          <Item>
            <Image 
              src='/gif/codeview.gif' 
              width={550} 
              height={327} 
              alt='wireframe-gif' 
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item>
            <InnerTitle
              innertitle={'「目的ファースト」な導線設計とデザイン'}
            />
            <Paragraph 
             paragraph={'なんのためにウェブサイトを作るのか、本当にウェブサイトが必要なのか、一番伝えたいことは何なのか、といった疑問提起にはじまります。導線設計やデザインをご提案します。'} 
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={7}>
          <Item>
            <Image 
              src='/gif/wireflame.gif' 
              width={550} 
              height={327} 
              alt='wireframe-gif' 
            />
          </Item>
        </Grid>
        
       
      </Grid>
    </Box>
  );
}

export default Service
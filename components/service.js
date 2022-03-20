import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Image from 'next/image'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0.5),
  textAlign: 'left',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.main,
  boxShadow: 'none',
  marginTop: '5rem'
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3Jp,
  textAlign: 'left',
  marginBottom: '1rem',
  marginTop: 0,
}))

const Prag = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  marginTop: '1rem'
}))


const Service = () => {
  return (
    <Box sx={{ 
      flexGrow: 1,
      mb: '5rem',
      
    }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item>
            <SubTitle component="h2">
              Whats setsuna?
            </SubTitle>
            <Prag component="p">
              setsunaは、大阪を拠点に活動するフリーランスのWEB制作所です。jamstackを用いた、パフォーマンスの高いウェブサイト構築を強みとしています。
            </Prag>
            <Prag component="p">
              sデザインにおいては、伝えたい情報に「いかに速くユーザーを導けるか」を意識した導線設計を心がけています。コーポレートサイトからオウンドメディアまで様々な形態に対応しており、最適な構築プランをご提案いたします。
            </Prag>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <Image 
              src='/gif/wireframe.gif' 
              width={550} 
              height={327} 
              alt='wireframe-gif' 
            />
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <Image 
              src='/gif/codeview.gif' 
              width={550} 
              height={290} 
              alt='codeview-gif' 
            />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
              <SubTitle component="h2">
                Jamstack
              </SubTitle>
              <Prag>
                setsunaは、大阪を拠点に活動するフリーランスのWEB制作所です。jamstackを用いた、パフォーマンスの高いウェブサイト構築を強みとしています。
              </Prag>
              <Prag>
                デザインにおいては、伝えたい情報に「いかに速くユーザーを導けるか」を意識した導線設計を心がけています。コーポレートサイトからオウンドメディアまで様々な形態に対応しており、最適な構築プランをご提案いたします。
              </Prag>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Service
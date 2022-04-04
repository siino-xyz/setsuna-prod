import Grid from '@mui/material/Grid'
import SubTitle from './common/sub-title'
import Stack from '@mui/material/Stack'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import styled  from '@emotion/styled'

const List = styled.ul`
  padding-left: 0;
  list-style-type: none;
  margin: 1rem;

 
`;

const Listitem = styled.li`
  padding-left: none;
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  justify-content: flex-start;
  margin:2rem 0;

  @media (max-width: 600px) {
        font-size: 1rem;
        margin:1rem 0;
      }
`;


const GridContainer = (props) => {
  const { sx, ...other} = props;
  return (
    <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        mx: 'auto',
        pb: 7,
        "@media screen and (max-width:900px)": {
            flexDirection: 'column-reverse',
            pb: 3,
          },
        ...sx,
      }}
      {...other}
    />
  )
}

const CkeckIcon = (props) => {
  const {sx, ...other} = props
  return (
    <CheckBoxIcon
      color='primary'
      sx={{
        mr: 1,
        ...sx,
      }}
      {...other}
    />
  )
}


import Image from 'next/image'

export const Question = () => {
  return (
    <>
    <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          my: 5,
          mx: 'auto',
        }}
      >
      <Stack 
        spacing={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="baseline"
      >
        <SubTitle
          subtitle={'Performance'}
        />
        <GridContainer>
        
          <Grid item xs={12} md={6}>
              <List>
                <Listitem>
                  <CkeckIcon />
                  自社サイトの読み込み速度が遅い
                </Listitem>
                <Listitem>
                <CkeckIcon />
                  特にスマホからの読み込みが遅い
                </Listitem>
                <Listitem>
                <CkeckIcon />
                  ユーザーの直帰率が高い
                </Listitem>
                <Listitem>
                <CkeckIcon />
                  PageSpeed Insightsのスコアが低い
                </Listitem>
              </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Image 
              src="/gif/MOSHED-2022-4-3-22-43-43.gif" 
              width={500} 
              height={320}
              alt="lazy_phone"
              layout='intrinsic'
            />
          </Grid>
        </GridContainer>

        <SubTitle
          subtitle={'Security'}
        />
        <GridContainer>

          <Grid item xs={12} md={6}>
              <List>
                <Listitem>
                  <CkeckIcon />
                  サーバーのメンテナンスを何年もやっていない
                </Listitem>
                <Listitem>
                <CkeckIcon />
                プラグインなどのアップデートを確認していない
                </Listitem>
                <Listitem>
                <CkeckIcon />
                セキュリティ対策の必要性が分からない
                </Listitem>
                <Listitem>
                <CkeckIcon />
                  メンテナンスが出来る担当者が社内にいない 
                </Listitem>
              </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image 
              src="/gif/MOSHED-2022-4-3-23-26-2 (1).gif" 
              width={500} 
              height={320}
              alt="lazy_phone"
              layout='intrinsic'
            />
          </Grid>

        </GridContainer>
      </Stack>
    </Stack>
    </>
  )
}

export default Question
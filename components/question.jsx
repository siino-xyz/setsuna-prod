import Grid from '@mui/material/Grid'
import SubTitle from './common/sub-title'
import Stack from '@mui/material/Stack'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import styled  from '@emotion/styled'
import Image from 'next/image'
import InnerWidth from '../layouts/inner-width'
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
        font-size: 0.9rem;
        margin:1rem 0;
        text-align: left;
      }
`;

const TextWrapper = styled.div`
  width: 100%;
  margin: 0 auto 2rem auto;
  @media (max-width: 600px) {
    width: 93%;
    margin: 0 auto 2rem auto !important;
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
            pb: 4,
            alignItems: 'start',
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
      color='error'
      sx={{
        mr: 1,
        ...sx,
        "@media screen and (max-width:600px)": {
          mr: 0.4
          },
      }}
      {...other}
    />
  )
}

export const Question = () => {
  return (
    <InnerWidth>
    <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          mb: 5,
          mx: 'auto',
          mt: 0,
          "@media screen and (max-width:600px)": {
            mb: 0,
          },
        }}
      >
      <TextWrapper>
        <p>ホームページやメディアサイトを運用したことのある方なら、以下のどれかのような課題・トラブルに遭遇したことがあるのではないでしょうか？</p>
      </TextWrapper>
      <Stack 
        spacing={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="baseline"
        sx={{
          "@media screen and (max-width:600px)": {
            alignItems:'stretch',
          },
        }}
      >
        <SubTitle
          subtitle={'Performance problems'}
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
          subtitle={'Security problems'}
        />
        <GridContainer>

          <Grid item xs={12} md={6}>
              <List>
                <Listitem>
                  <CkeckIcon />
                  サーバーの更新・確認を行っていない
                </Listitem>
                <Listitem>
                  <CkeckIcon />
                  プラグインのバージョンが古いまま
                </Listitem>
                <Listitem>
                  <CkeckIcon />
                  セキュリティ対策の必要性が分からない
                </Listitem>
                <Listitem>
                  <CkeckIcon />
                  メンテナンスの担当者が社内にいない 
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
      <TextWrapper>
        <p>これらのトラブルはすべて、私が実際にウェブサイト開発の現場で対峙したものです。<br />
        Wordpressで作ったサイトが重すぎて困っているウェブ担当者や、セキュリティの脆弱性を突かれて乗っ取り被害に遭ってしまったサイトをたくさん見てきました。</p>
      </TextWrapper>
    </Stack>
    </InnerWidth>
  )
}

export default Question
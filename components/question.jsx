import Grid from '@mui/material/Grid'
import SubTitle from './common/sub-title'
import InnerWidth from '../layouts/inner-width'
import Stack from '@mui/material/Stack'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import styled  from '@emotion/styled'

const List = styled.ul`
  padding-left: 0;
  list-style-type: none;
  margin: 5rem;
 
`;

const Listitem = styled.li`
  padding-left: none;
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  justify-content: flex-start;
  margin:2rem 0;

  @media (min-width: 420px) {
        font-size: 1rem;
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
        margin: 'auto',
        "@media screen and (max-width:900px)": {
            flexDirection: 'column-reverse',
          },
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
    <InnerWidth>
      <Stack spacing={10}>

        <GridContainer>

          <Grid item xs={12} md={6}>
            <Stack 
              spacing={1}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <SubTitle
                subtitle={'Performance'}
              />
              <List>
                <Listitem>
                  <CheckBoxIcon />
                  自社サイトの読み込み速度が遅い
                </Listitem>
                <Listitem>
                <CheckBoxIcon />
                  特にスマホからの読み込みが遅い
                </Listitem>
                <Listitem>
                <CheckBoxIcon />
                  ユーザーの直帰率が高い
                </Listitem>
                <Listitem>
                <CheckBoxIcon />
                  PageSpeed Insightsのスコアが低い
                </Listitem>
              </List>
            </Stack>
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


        <GridContainer>


        <Grid item xs={12} md={6}>
          <Stack 
            spacing={1}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <SubTitle
              subtitle={'Security'}
             />
            <List>
              <Listitem>
                <CheckBoxIcon />
                サーバーのメンテナンスを何年もやっていない
              </Listitem>
              <Listitem>
              <CheckBoxIcon />
              プラグインなどのアップデートを確認していない
              </Listitem>
              <Listitem>
              <CheckBoxIcon />
              セキュリティ対策の必要性が分からない
              </Listitem>
              <Listitem>
              <CheckBoxIcon />
                メンテナンスが出来る担当者が社内にいない 
              </Listitem>
            </List>
          </Stack>
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
    </InnerWidth>
    </>
  )
}

export default Question
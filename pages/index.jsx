// import { client } from '../libs/client'
import Link from 'next/link'
import Moment from 'react-moment'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Header from '../components/header'
import Footer from '../components/footer'
import Service from '../components/service'
import Layout from '../components/layout'
import Detail from '../components/detail'
import Profile from '../components/profile'
import SectionTitle from '../components/sectiontitle'
import HeroHeader from '../components/heroheader'
import BlogHeader from '../components/blogheader'
// import InputForm from '../components/inputform'
import Sat from '../components/articles'
import ResponsiveGrid from '../components/temp-component'

export default function Home({articles}) {

  return (
    <>
      <Header />
      <HeroHeader />
      {/* <ResponsiveGrid /> */}
 

      <Layout index>

      <Box sx={{ 
        flexGrow: 1,
        my: 10,
      }}>
        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {articles.map((articles) => (
                <Sat
                articles={articles}
                key={articles.id}
                >
                </Sat>
          ))}
        </Grid>
      </Box>
        <SectionTitle
          sectiontitle={'高速でセキュアなウェブサイトを作ります'}
        />
        <Service />
        <SectionTitle
          sectiontitle={'Jamstackとは？'}
        />
        <Detail />
        <SectionTitle
          sectiontitle={'プロフィール'}
        />
        <Profile />
        <SectionTitle
          sectiontitle={'ご用命・ご相談はこちらから'}
        />
        {/* <InputForm /> */}
      </Layout>
      <Footer />
    </>
  )
}


export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=3', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount
    },
  };
};
import Layout from '../layouts/layout'
import NestedLayout from '../layouts/nested-layout'

import Service from '../components/service'
import Detail from '../components/detail'
import Profile from '../components/profile'
import SectionTitle from '../components/sectiontitle'
import ArticleCard from '../components/articles'

import Grid from '@mui/material/Grid';
import LinkButton from '../components/button'

export default function Home({articles}) {
  return (
    <>
      <Grid 
       container spacing={{ xs: 2, md: 5 }}
       columns={{ xs: 4, sm: 8, md: 12 }}
       sx={{
         mx: 'auto',
         pt: 7,
         pb: 1,

       }}
      >

        {articles.map((articles) => (
          <ArticleCard
          articles={articles}
          key={articles.id}
          >
          </ArticleCard>
        ))}
      </Grid>

      <LinkButton
        url={'/blog'}
        button={'記事一覧'}
      />
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
    </>
  )
}

Home.getLayout = function getLayout(home) {
  return (
    <Layout>
      <NestedLayout index>{home}</NestedLayout>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY},
  }
  const data = await fetch('https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=3', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount
    },
  }
}
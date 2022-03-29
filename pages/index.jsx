import Layout from '../layouts/layout'
import NestedLayout from '../layouts/nested-layout'

import LinkButton from '../components/button'
import Service from '../components/service'
import Detail from '../components/detail'
import Profile from '../components/profile'
import SectionTitle from '../components/sectiontitle'
import SectionText from '../components/section-text'
import ArticleCard from '../components/articles'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function Home({articles}) {
  return (
    <>
            <SectionTitle
        sectiontitle={'News/blog'}
      />
      <Grid 
       container spacing={{ xs: 2, md: 5 }}
       columns={{ xs: 4, sm: 8, md: 12 }}
       sx={{
         mx: 'auto',
         pt: 0,
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
        button={'setsuna Blogを見る'}
      />
      <SectionTitle
        sectiontitle={'SE-27(setsuna)は「速さ」について考えるweb制作所です。'}
      />
      <Service />
      <SectionTitle
        sectiontitle={'Jamstackとは？'}
      />
      <Detail />
      <SectionTitle
        sectiontitle={'Profile'}
      />
      <Profile />
      <SectionTitle
        sectiontitle={'Contact'}
      />
        <Box sx={{
          pb: 1,
          mt: 3,
        }}>
          <SectionText 
            sectiontext={'個人・事業者様問わずご依頼をお引き受けしておりますので、'}
          />
          <SectionText 
            sectiontext={'まずは下記フォームよりお気軽にお問い合わせください。'}
          />
          <SectionText 
            sectiontext={'コーディングのみ、デザインのみのご相談も歓迎しております。'}
          />
        </Box>
      
      <LinkButton
        url={'/contact'}
        button={'フォームからお問い合わせする'}
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
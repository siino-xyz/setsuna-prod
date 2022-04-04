import Layout from '../layouts/layout'
import NestedLayout from '../layouts/nested-layout'

import Profile from '../components/profile'

import ArticleCard from '../components/common/articles'
import LinkButton from '../components/common/button'
import SectionTitle from '../components/common/section-title'
import Paragraph from '../components/common/paragraph'
import Question from '../components/question'
import Solution from '../components/solution'
import CustomizedAccordions from '../components/q-and-a'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function Home({articles}) {
  return (
    <>

      <div id='services'>
        <SectionTitle
          sectiontitle={'Fast,Secure,Useful'}
        />
      </div>
      <Paragraph 
        paragraph={'SE-27(せつな)は、大阪を拠点に活動するフリーランスのWEB制作所です。'}
      />
      <Paragraph 
        paragraph={'jamstackを用いた、パフォーマンスの高いウェブサイト構築を強みとしています。'}
      />

      <SectionTitle
        sectiontitle={'Raise a Question'}
      />
      <Question />

      <SectionTitle
        sectiontitle={'Solution'}
      />
      <Solution />

      <div id='profile'>
        <SectionTitle
          sectiontitle={'Profile'}
        />
      </div>

      <Profile />

      <div id='contact'>
        <SectionTitle
          sectiontitle={'Contact'}
        />
      </div>

        <Box sx={{
          pb: 1,
          mt: 3,
        }}>
          <Paragraph 
            paragraph={'個人・事業者様問わずご依頼をお引き受けしておりますので、'}
          />
          <Paragraph 
            paragraph={'まずは下記フォームよりお気軽にお問い合わせください。'}
          />
          <Paragraph 
            paragraph={'コーディングのみ、デザインのみのご相談も歓迎しております。'}
          />
        </Box>
      
      <LinkButton
        url={'contact'}
        button={'フォームからお問い合わせする'}
      />

      <SectionTitle
        sectiontitle={'Q&A'}
      />
      <CustomizedAccordions />

      <SectionTitle
        sectiontitle={'News.blog'}
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
        url={'blog'}
        button={'記事一覧'}
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
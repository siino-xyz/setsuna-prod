import dynamic from 'next/dynamic'
import InnerWidth from '../layouts/inner-width'
import styles from '../styles/pages/index.module.scss'
const NestedLayout = dynamic(() => import('../layouts/nested-layout'))
const Profile = dynamic(() => import('../components/profile'))
const Layout = dynamic(() => import('../layouts/layout'))
const LinkButton = dynamic(() => import('../components/common/button'))
const SectionTitle = dynamic(() => import('../components/common/section-title'))
const Question = dynamic(() => import('../components/question'))
const Solution = dynamic(() => import('../components/solution'))
const ArticleCard = dynamic(() => import('../components/common/articles'))

export default function Home({articles}) {
  return (
    <>
      <div id='services'>
        <SectionTitle
          sectiontitle={'Raise a Question'}
          subscript={''}
        />
      </div>

      <Question />

      <SectionTitle
        sectiontitle={'Our Solution'}
        subscript={'Jamstackで高速・セキュアなウェブサイトを'}
      />

      <Solution />

      <div id='profile'>
        <SectionTitle
          sectiontitle={'My Profile'}
          subscript={'プロフィール'}
        />
      </div>

      <Profile />

      <div id='contact'>
        <SectionTitle
          sectiontitle={'Contact'}
          subscript={'ご依頼・ご相談はこちらから'}
        />
      </div>

      <InnerWidth>
        <LinkButton
          url={'/contact'}
          button={'フォームからお問い合わせする'}
        />
      </InnerWidth>

      <div id='q-a'>
        <SectionTitle
          sectiontitle={'Q&A'}
          subscript={'よくあるご質問'}
        />
      </div>

      <LinkButton
        url={'/q-and-a'}
        button={'Q&Aを見る'}
      />

      <SectionTitle
        sectiontitle={'Blog'}
        subscript={'お知らせとテックブログ'}
      />

      <div className={styles.articleConatiner}>
        {articles.map((articles) => (
          <ArticleCard
          articles={articles}
          key={articles.id}
          >
          </ArticleCard>
        ))}
      </div>

      <LinkButton
        url={'blog'}
        button={'ブログを読む'}
      />
    </>
  )
}

Home.getLayout = function getLayout(home) {
  return (
    <Layout>
      <NestedLayout>{home}</NestedLayout>
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
import { client } from '../libs/client'
import Link from 'next/link'
import Moment from 'react-moment'


import Footer from '../components/footer'
import SectionTitle from '../components/sectiontitle'
import BlogHeader from '../components/blogheader'
import Sat from '../components/articles'
import Cate from '../components/category'
import Layout from '../components/layout'


const ArticlesHome = ({articles, category}) => {
  return (
    <>
    <BlogHeader />
    <Layout>
      <ul>
        {category.map((category) => (
          <Cate
          category={category}
          key={category.id}
          >
        </Cate>
        ))}
      </ul>
      <ul>
        {articles.map((articles) => (
        <Sat
        articles={articles}
        key={articles.id}
        >
        </Sat>
        ))}
      </ul>
    </Layout>
    <Footer />
    </>
  )
}

export default ArticlesHome

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'articles' });
  const categoryData = await client.get({ endpoint: 'categories'});

  return {
    props: {
      articles: data.contents,
      category: categoryData.contents
    }
  }
}

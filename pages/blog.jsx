import { client } from '../libs/client'
import Link from 'next/link'
import Moment from 'react-moment'


import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



import Footer from '../components/footer'
import BlogHeader from '../components/blogheader'
import ArticleCard from '../components/articles'
import Cate from '../components/category'
import Layout from '../components/layout'

//mui components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const ArticlesHome = ({articles, category}) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
    <BlogHeader />
    <Layout>
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      {category.map((category) => (
            <Cate
            key={category.id}
            category={category}
            >
            </Cate>
          ))}
      </Tabs>
      {/* <ul>
        {category.map((category) => (
          <Cate
          key={category.id}
          category={category}
          >
          </Cate>
        ))}
      </ul> */}
      <Box sx={{ 
          flexGrow: 1,
          my: 10,
        }}>
          <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {articles.map((articles) => (
              <ArticleCard
              articles={articles}
              key={articles.id}
              >
              </ArticleCard>
            ))}
          </Grid>
        </Box>
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

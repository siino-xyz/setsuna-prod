import { client } from '../libs/client'
import Link from 'next/link'
import Moment from 'react-moment'

import ArticleLayout from '../layouts/article-layout'
import NestedLayout from '../layouts/nested-layout'

import ArticleCard from '../components/articles'
import Cate from '../components/category'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const ArticlesHome = ({articles, category}) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      {category.map((category) => (
            <Cate
            key={category.id}
            category={category}
            >
            </Cate>
          ))}
      </Tabs>

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
    </>
  )
}


ArticlesHome.getLayout = function ArticlesHome(articleshome) {
  return (
    <ArticleLayout>
      <NestedLayout index>{articleshome}</NestedLayout>
    </ArticleLayout>
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

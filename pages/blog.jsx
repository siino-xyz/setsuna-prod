import { client } from '../libs/client'

import ArticleLayout from '../layouts/article-layout'
import NestedLayout from '../layouts/nested-layout'

import ArticleCard from '../components/articles'
import Cate from '../components/category'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const ArticlesHome = ({articles, category}) => {
  
  return (
    <>
    <Box sx={{
      mt: 8,
    }}>

      <Cate
        Category={[...category]}
        key={category.id}
        category={category}
      >
      </Cate>
      
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

import { client } from '../libs/client'
import ArticleLayout from '../layouts/article-layout'
import NestedLayout from '../layouts/nested-layout'
import ArticleCard from '../components/articles'
import CategoryTab from '../components/category'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

const ArticlesHome = ({ articles ,category }) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{
        mt: 8,
      }}>

        {/* Category tab menu start */}
        <Box sx={{
                textAlign: 'center',
                mx: 'auto',
                pt: 5,
                pb: 0
              }}>
              <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" centered>
                {category.map((category) => (
                    <CategoryTab 
                      category={category}
                      key= {category.id}
                    />
                  ))}
                </Tabs>
              </Box>
        {/* Category tab menu  end */}

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
    },
  };
};
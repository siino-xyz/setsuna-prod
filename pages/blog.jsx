import { client } from '../libs/client'
import BlogLayout from '../layouts/blog-layout'
import BlogInnerLayout from '../layouts/blog-inner-layout'
import ArticleCard from '../components/common/articles'
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SectionTitle from '../components/common/section-title';

const ArticlesHome = ({ articles ,category }) => {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{
        mt: 18,
      }}>
        <SectionTitle
          sectiontitle={'All Posts'}
          subscript={'記事一覧'}
        />
        {/* Category tab menu start */}
        {/* <Box sx={{
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
              </Box> */}
        {/* Category tab menu  end */}

        <Box sx={{ 
            flexGrow: 1,
            my: 8,
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
    <BlogLayout>
      <BlogInnerLayout >{articleshome}</BlogInnerLayout>
    </BlogLayout>
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
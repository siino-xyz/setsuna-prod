import { client } from "../../libs/client";
import * as React from 'react'

import ArticleLayout from '../../layouts/article-layout'
import NestedLayout from '../../layouts/nested-layout'

import ArticleCard from '../../components/articles'
import CategoryTab from '../../components/category'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography'

const CategoryId = ({ articles , category }) => {

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (articles.length === 0) {
    return (
      <>
      <Box sx={{
        mt: 8,
      }}>
  
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
         height:'100vh',
         margin: 'auto',
         width: '100%',
         textAlign: 'center',
         pt: 15
       }}>
         <Typography variant="h3" component='p'>
            このカテゴリには記事がありません。
         </Typography>
       </Box>
      </Box>
    </>
  
    )
  }
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

  );
}

CategoryId.getLayout = function ArticlesHome(categoryid) {
  return (
    <ArticleLayout>
      <NestedLayout>{categoryid}</NestedLayout>
    </ArticleLayout>
  )
}

export default CategoryId

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", queries: { filters: `categories[equals]${id}` } });

  const categoryData = await client.get({ endpoint: 'categories'});


  return {
    props: {
      articles: data.contents,
      category: categoryData.contents
    },
  }
  
}
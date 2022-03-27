import { client } from "../../libs/client"
import Image from 'next/image'
import Moment from 'react-moment'

import ArticleLayout from '../../layouts/article-layout'
import NestedLayout from '../../layouts/nested-layout'

import LinkButton from '../../components/button'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  LineIcon,
  LineShareButton,
  PinterestIcon,
  PinterestShareButton
} from "react-share";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  textAlign: 'center',
  boxShadow: 'none',
  mx: 'auto',
}));



export default function ArticlesId({ articles }) {

  return (
    <>
   
      <Box sx={{
        mt: '7rem'
      }}>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          margin: 'auto',
        }}>
          <Image 
            src={articles.eye_catch.url}
            width={944}
            height={531}
            layout='intrinsic'
            alt="eye_catch"
          />
        </Box>

        <Box sx={{
          width: '85%',
          mx: 'auto',
          mb: '5rem',
        }}>

        <Stack spacing={1}   alignItems="flex-start"
          sx={{
            mt: 2,
            mb: 4,
        }}>
      
          <Typography variant='subtitle2' color='primary' component='span' 
          sx={{
            backgroundColor:'common.black',
            px: 1.5,
            py: 0.5,
            borderRadius: '0.2rem',
          }}>
              {articles.categories.name}
          </Typography>

          <Typography variant='h3' component='h1' 
            sx={{
              pt: 1,
              textDecoration: 'none !important',
              
            }}>
            {articles.title}
          </Typography>
          <Typography variant='smalltitle2' component='p' 
            sx={{
              pl: 0.5,
            }}>
            <Moment format="YYYY/MM/DD">
              {articles.publishedAt}
            </Moment>
          </Typography>
        </Stack>


          <Box
            sx={{
              width:'100%',
              mx: 'auto',
              
            }}
            dangerouslySetInnerHTML={{
              __html: `${articles.body}`,
            }}
          />
          <Box sx={{
            my: '2rem',
          }}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Typography variant='h4' component='div'>
                この記事をシェアする
              </Typography>
              <Stack 
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >

                <Item>
                  <TwitterShareButton url={[`http://localhost:8080/articles/${articles.id}`]} title={[articles.title]}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </Item>
                <Item>
                  <FacebookShareButton url={[`http://localhost:8080/articles/${articles.id}`]}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </Item>
                <Item>
                  <LineShareButton url={[`http://localhost:8080/articles/${articles.id}`]} title={[articles.title]}>
                    <LineIcon size={32} round />
                  </LineShareButton>
                </Item>
                <Item>
                  <PinterestShareButton url={[`http://localhost:8080/articles/articles/${articles.id}`]} media={[`http://localhost:8080/${articles.eye_catch.url}`]} description={[articles.title]}>
                    <PinterestIcon size={32} round />
                  </PinterestShareButton>
                </Item>
              </Stack>
            </Stack>

          </Box>
          <LinkButton 
            url={'/blog'}
            button={'記事一覧に戻る'}
          />
        </Box>
      </Box>
     

    </>
  );
}


ArticlesId.getLayout = function ArticlesHome(articlesid) {
  return (
    <ArticleLayout>
      <NestedLayout>{articlesid}</NestedLayout>
    </ArticleLayout>
  )
}


export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", contentId: id });
  

  return {
    props: {
      articles: data,
    },
  };
};

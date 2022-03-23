import BlogHeader from '../../components/blogheader'
import Footer from '../../components/footer'
import Layout from '../../components/layout'
import { client } from "../../libs/client"
import Image from 'next/image'
import Moment from 'react-moment'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  textAlign: 'center',
  boxShadow: 'none',
  mx: 'auto',
}));

export default function ArticlesId({ articles }) {

  return (
    <>
    <BlogHeader />
    <Layout>
      <Box sx={{
        mt: '2rem'
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
      
          <Typography variant='subtitle2' component='span' 
          sx={{
            backgroundColor:'common.black',
            px: 1.5,
            py: 0.5,
            borderRadius: '0.2rem',
          }}>
              {articles.categories.name}
          </Typography>

          <Typography variant='h2' component='h1' 
            sx={{
              pt: 1,
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


          <div
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
                  <Image 
                    src='/icons/twitter-logo.svg'
                    width={35}
                    height={35}
                    layout='fixed'
                    alt="twitter_icon"
                  />
                </Item>
                <Item>
                  <Image 
                    src='/icons/line-icon.svg'
                    width={35}
                    height={35}
                    layout='fixed'
                    alt="line_icon"
                  />
                </Item>
                <Item>
                  <Image 
                    src='/icons/fb-icon.svg'
                    width={35}
                    height={35}
                    layout='fixed'
                    alt="fb_icon"
                  />
                </Item>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Layout>
    <Footer />
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", contentId: id });

  return {
    props: {
      articles: data,
    },
  };
};
import Link from "next/link"
import Articles from "../models/post"
import Image from 'next/image'
import Moment from 'react-moment'
import styled from '@emotion/styled'

// //mui-components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

// const HoverEyeCt = styled.a`
// transition: all .3s;
// display:
//   &:hover {
//     backdrop-filter: blur(4px);
//     opacity: .8;
//   } 
// `;

const ArticleCard = ({ articles }: {
  articles: Articles
}) => {
  const MaxLength = 5;

  return (
    <>

    <Grid item xs={10} sm={4} md={4}
         
    >
      <Card sx={{ 
          maxWidth: 330,
          py: 0,
          boxShadow: 'none',
          borderRadius: '0.1rem',
          overflow: 'hidden',
          mx: 'auto',
          backgroundColor: 'common.black',
        }} 
        key={articles.id}
      >

        <Link href={`/articles/${articles.id}`} passHref>
          <a>
            <Box sx={{
              
            }}>
              <Image
                src={articles.eye_catch.url}
                width={330}
                height={190}
                layout='responsive'
                alt="eye_catch"
              />
            </Box>
          </a>
        </Link>
        <CardContent sx={{
             backgroundColor: 'common.white',
        }}>
          <Typography variant='subtitle2' component='span'
          sx={{
            backgroundColor: 'common.black',
            color: 'common.white',
            px: 1,
            pt: 0.2,
            pb: 0.3,
            my: 0,
            borderRadius: 0.7,
          }}>
            {articles.categories.name}
          </Typography>

          <Link href={`/articles/${articles.id}`} passHref>
            <a>
             <Typography 
             variant='subtitle1'
             component='h1'
             sx={{
               color: 'common.black',
               lineHeight: '1.5rem',
               cursor: 'pointer',
               my: 1,
               mx: 0,
               minHeight: '100px',
               maxHeight: '100px',
                  "@media screen and (max-width:400px)": {
                    minHeight: '40px',
                    maxHeight: '40px',
                  },
             }}
             >
              {articles.title}
             </Typography>
            </a>
          </Link>


        
          <Typography variant='subtitle2' component='p' 
            sx={{
                color: 'common.black',
                
              }}
              >
              <Moment format="YYYY/MM/DD">
                {articles.publishedAt}
              </Moment>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
   </>
  )
}

export default ArticleCard



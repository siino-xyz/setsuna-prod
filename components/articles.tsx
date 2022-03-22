import Link from "next/link"
import Articles from "../models/post"
import Image from 'next/image'

// //mui-components
// import { CardActionArea } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';


const Sat = ({ articles }: {
  articles: Articles
}) => {

  return (
    <>
    <li key={articles.id}>
      <Link href={`/articles/${articles.id}`}>
        <div>

        <a>{articles.title}</a>
        <Image
          src={articles.eye_catch.url}
          width={300}
          height={160}
          layout='intrinsic'
          alt="eye_catch"
        />
        </div>
      </Link>
    </li>         
   </>
  
  


  )
}

export default Sat
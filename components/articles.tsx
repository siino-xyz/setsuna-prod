import Link from "next/link"
import Articles from "../models/post"


const Sat = ({ articles }: {
  articles: Articles
}) => {

  return (
    <>
    <li key={articles.id}>
      <Link href={`/articles/${articles.id}`}>
        <a>{articles.title}</a>
      </Link>
    </li>         
   </>
  )
}

export default Sat
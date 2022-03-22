import Link from "next/link"
import Category from "../models/category"


const Cate = ({ category }: {
  category: Category
}) => {

  return (
    <>
    <li key={category.id}>
      <Link href={`/category/${category.id}`}>
        <a>{category.name}</a>
      </Link>
    </li>         
   </>
  )
}

export default Cate
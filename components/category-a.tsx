import Link from "next/link"
import Category from "../models/category"

import * as React from 'react'

const Acate = ({ category }: {
  category: Category
}) => {
  return (
    <>
    <div key={category.categories}>
      <Link href={`/category/${category.id}`} passHref>
        <div>
          {category.categories}
        </div>
      </Link>
    </div>
   </>
  )
}

export default Acate


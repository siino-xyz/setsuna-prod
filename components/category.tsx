import Link from "next/link"
import Category from "../models/category"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Cate = ({ category }: {
  category: Category
}) => {

  return (
    <>
    {/* <li key={category.id}>
      <Link href={`/category/${category.id}`} passHref>
        <a>{category.name}</a>
      </Link>
    </li> */}
    <div key={category.id}>
      <Link href={`/category/${category.id}`} passHref>
        <LinkTab label={category.name} />
      </Link>
    </div>
   </>
  )
}

export default Cate
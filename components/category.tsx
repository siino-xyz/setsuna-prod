import Link from "next/link"
import Category from "../models/category"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


import * as React from 'react';


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
  category: Array<Category>
}) => {

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
        {category.map((category) => (
          <div key={category.id}>
            <Link href={`/category/${category.id}`} passHref>
              <LinkTab label={category.name} />
            </Link>
          </div>
          ))}
      </Tabs>
   </>
  )
}

export default Cate


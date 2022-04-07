
import dynamic from 'next/dynamic'
const CustomizedAccordions = dynamic(() => import('../components/q-and-a'))

import BlogLayout from '../layouts/blog-layout'
import NestedLayout from '../layouts/nested-layout'
import SectionTitle from '../components/common/section-title'

const Qa = () => {
  return (
    <>
      {/* <div className={styles.contactContainer}> */}
        <SectionTitle
          sectiontitle={'Q&A'}
        />
        <CustomizedAccordions />
      {/* </div> */}
    </>
  )
}

Qa.getLayout = function getLayout(qa) {
  return (
    <BlogLayout>
      <NestedLayout>{qa}</NestedLayout>
    </BlogLayout>
  )
}

export default Qa
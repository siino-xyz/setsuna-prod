
import dynamic from 'next/dynamic'
const ContactForm = dynamic(() => import('../components/contact'))

import BlogLayout from '../layouts/blog-layout'
import NestedLayout from '../layouts/nested-layout'
import styles from '../styles/pages/contact.module.scss'
import SectionTitle from '../components/common/section-title'

const ContactFormPage = () => {
  return (
    <>
      <div className={styles.contactContainer}>
        <SectionTitle
          sectiontitle={'お問い合わせフォーム'}
        />
        <ContactForm />
      </div>
    </>
  )
}

ContactFormPage.getLayout = function getLayout(contactformpage) {
  return (
    <BlogLayout>
      <NestedLayout>{contactformpage}</NestedLayout>
    </BlogLayout>
  )
}

export default ContactFormPage

import dynamic from 'next/dynamic'
const ContactForm = dynamic(() => import('../components/contact'))

import BlogLayout from '../layouts/blog-layout'
import NestedLayout from '../layouts/nested-layout'

import SectionTitle from '../components/common/section-title'
// import Paragraph from '../components/common/paragraph'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const ContactFormPage = () => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{
          height: '90h',
          pt: 7,
        }}
      >
        <SectionTitle
          sectiontitle={'お問い合わせフォーム'}
        />
        <Box sx={{
          pb: 1,
          mt: 0,
        }}>
          {/* <Paragraph 
            paragraph={'Webサイト制作のご相談はもちろん、簡単なお見積りや制作プランについてのご質問なども歓迎しております。'}
          />
          <Paragraph 
            paragraph={'まずは下記フォームよりお気軽にお声がけください。'}
          /> */}
        </Box>
        <ContactForm />
      </Stack>
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
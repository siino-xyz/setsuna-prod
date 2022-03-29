import ContactForm from '../components/contact'
import ContactFormLayout from '../layouts/contact-layout'
import NestedLayout from '../layouts/nested-layout'

import SectionTitle from '../components/sectiontitle'
import SectionText from '../components/section-text'
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
          <SectionText 
            sectiontext={'Webサイト制作のご相談はもちろん、簡単なお見積りや制作プランについてのご質問なども歓迎しております。'}
          />
          <SectionText 
            sectiontext={'まずは下記フォームよりお気軽にお声がけください。'}
          />
        </Box>
        <ContactForm />
      </Stack>
    </>
  )
}

ContactFormPage.getLayout = function getLayout(contactformpage) {
  return (
    <ContactFormLayout>
      <NestedLayout index>{contactformpage}</NestedLayout>
    </ContactFormLayout>
  )
}

export default ContactFormPage
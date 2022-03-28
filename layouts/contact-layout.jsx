import Header from '../components/header'
import Footer from '../components/footer'

const ContactFormLayout = ({children}) => {
  return (
    <>
    <Header />      
        {children}
    <Footer />
    </>
  )
}

export default ContactFormLayout
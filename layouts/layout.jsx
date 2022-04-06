import Header from '../components/header'
import Footer from '../components/footer'
import HeroHeader from '../components/firstview'

const Layout = ({children}) => {
  return (
    <>
    <Header />
    <HeroHeader />
        {children}
    <Footer />
    </>
  )
}

export default Layout
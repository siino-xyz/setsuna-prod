import Header from '../components/header'
import Footer from '../components/footer'



const BlogLayout = ({children}) => {
  return (
    <>
    <Header />
      {children}
    <Footer />
    </>
  )
}

export default BlogLayout
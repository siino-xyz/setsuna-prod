import BlogHeader from '../components/blogheader'
import Footer from '../components/footer'



const ArticleLayout = ({children}) => {
  return (
    <>
    <BlogHeader />
   
    {children}
    <Footer />
    </>
  )
}

export default ArticleLayout
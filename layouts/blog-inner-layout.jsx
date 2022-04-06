import styles from '../styles/layouts/blog-inner-layout.module.scss'



const BlogInnerLayout = ({ children }) => {
  return (
    <>
    <div className={styles.blogInnerLayout}>
          <main>{children}</main>

    </div>
 
    </>
  )
}

export default BlogInnerLayout
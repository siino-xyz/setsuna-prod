import styles from '../styles/layouts/nested-layout.module.scss'


const NestedLayout = ({children}) => {
  return (
    <>
      <div className={styles.innerContainer}>
 
        <main>{children}</main>
      </div>
    </>
  )
}

export default NestedLayout
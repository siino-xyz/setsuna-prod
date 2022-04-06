import styles from '../styles/layouts/inner-width.module.scss'

export const InnerWidth = ({children}) => {
  return (
    <>
      <div className={styles.innerWidth}>
        {children}
      </div>
    </>
  )
}

export default InnerWidth 
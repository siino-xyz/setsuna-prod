import styles from '../../styles/components/common/sub-title.module.scss'

const SubTitle = (props) => {
  return (
    <h3 className={styles.subTitle}>
        {props.subtitle}
    </h3>
    
  )
}

export default SubTitle
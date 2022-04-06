import styles from '../../styles/components/common/section-title.module.scss'

const SectionTitle = (props) => {
  return (
    <>
      <h2 className={styles.sectionTitle}>
      {props.sectiontitle}
        <p className={styles.subScript}>
        {props.subscript}
        </p>
      </h2>
    </>
  )
}

export default SectionTitle
import Link from 'next/link'

import styles from '../../styles/components/common/button.module.scss';

const LinkButton = (props) => {
  return (
    <div className={styles.btnWrapper}>
      <Link href={`/${props.url}`} passHref>
        <div className={styles.btn}>
            {props.button}
        </div>
      </Link>
    </div>
  )
}

export default LinkButton
import Image from 'next/image'
import styles from '../styles/components/firstview.module.scss'

const HeroHeader = () => {
  return (
    <>
      <div className={styles.fvLogoWrapper}>

        <div className={styles.fvLogo}>
          <Image 
            src='/logo/bg-logo.svg'
            width={388}
            height={486}
            layout='intrinsic'
            alt="hikakin-tv"
          />
        </div>
      </div>
    </>
  )
}

export default HeroHeader
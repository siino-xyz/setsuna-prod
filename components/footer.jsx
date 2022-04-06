import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/footer.module.scss'

 const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.twoWayFlex}>
      
        <div>
          <div styled={styles.footerLogoWrapper}>
            <Link href='/' passHref>
              <a>
                <Image 
                  src="/logo/se-logo-sp-footer.svg" 
                  width={338} height={107} 
                  alt='setsuna-logo'
                  layout='intrinsic'
                />
              </a>
            </Link>
          </div>
        </div>

        <div>
          <div className={styles.copylight}>
            ©copylight setsuna all lights.
          </div>
        </div>
      </div>
    </div>
  );
}


export default Footer
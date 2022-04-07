import Image from 'next/image'
import styles from '../styles/pages/thanks.module.scss'
import NestedLayout from '../layouts/nested-layout'
import LinkButton from '../components/common/button'

const ThanksPage = () => {
  return (
    <>
      <div className={styles.thanksContainer}>
        <div className={styles.columnStack}>
          <Image 
            src='/icons/plane-icon.svg'
            width={248}
            height={136}
            alt='mail_send_complate'
          />

          <div className={styles.largeTx}>
            お問い合わせ頂き、ありがとうございます。
          </div>
          <p className={styles.subScript}>
            setsunaへお問い合わせ頂きありがとうございます。<br />
            原則１営業日以内に折り返しご連絡致しますので、今しばらくお待ち下さい。
          </p> 
            <LinkButton 
              url={'/'}
              button={'トップページに戻る'}
            />
        </div>
      </div>
    </>
  )
}

ThanksPage.getLayout = function getLayout(thankspage) {
  return (
    
      <NestedLayout>{thankspage}</NestedLayout>
    
  )
}


export default ThanksPage

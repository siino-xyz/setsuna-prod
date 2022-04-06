import Image from 'next/image'
import SubTitle from './common/sub-title'
import InnerWidth from '../layouts/inner-width'
import styles from '../styles/components/profile.module.scss'

const Profile = () => {
  return (
    <InnerWidth>
      <div classsName={styles.columnStack}>
        <div className={styles.imageWrapper}>
          <Image 
            src='/images/about-1.png'
            width={175}
            height={175}
            alt='about-1'
            />
        </div>
        <SubTitle 
          subtitle={'siino'}
        />
          <p>鳥取県出身の1995/04/27生まれ。今は大坂でフリーランスエンジニア/デザイナーをやっています。昔はテレビ局の報道部門で働いていたりしました。<br />
          何かを作ったり、ものを考えたりすることが得意です。
          <br />
          趣味はギターと自作キーボードとWikipedia巡り。</p>

      </div>
    </InnerWidth>
  )
}

export default Profile
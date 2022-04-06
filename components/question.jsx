import SubTitle from './common/sub-title'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Image from 'next/image'
import InnerWidth from '../layouts/inner-width'
import styles from '../styles/components/question.module.scss'



const CkeckIcon = (props) => {
  const {sx, ...other} = props
  return (
    <CheckBoxIcon
      color='error'
      sx={{
        mr: 1,
        ...sx,
        "@media screen and (max-width:600px)": {
          mr: 0.4
          },
      }}
      {...other}
    />
  )
}

export const Question = () => {
  return (
    <InnerWidth>

        <p>ホームページやメディアサイトを運用したことのある方なら、以下のどれかのような課題・トラブルに遭遇したことがあるのではないでしょうか？</p>
 
        <SubTitle
          subtitle={'Performance problems'}
        />
        <div className={styles.twoWayFlex}>
        
          <div className={styles.flexItem}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <CkeckIcon />
                  自社サイトの読み込み速度が遅い
                </li>
                <li className={styles.listItem}>
                <CkeckIcon />
                  特にスマホからの読み込みが遅い
                </li>
                <li className={styles.listItem}>
                <CkeckIcon />
                  ユーザーの直帰率が高い
                </li>
                <li className={styles.listItem}>
                <CkeckIcon />
                  PageSpeed Insightsのスコアが低い
                </li>
              </ul>
          </div>

          <div className={styles.flexItem}>
            {/* <Image 
              src="/gif/MOSHED-2022-4-3-22-43-43.gif" 
              width={500} 
              height={320}
              alt="lazy_phone"
              layout='intrinsic'
            /> */}
          </div>
        </div>

        <SubTitle
          subtitle={'Security problems'}
        />
        <div className={styles.twoWayFlex}>

          <div className={styles.flexItem}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <CkeckIcon />
                  サーバーの更新・確認を行っていない
                </li>
                <li className={styles.listItem}>
                  <CkeckIcon />
                  プラグインのバージョンが古いまま
                </li>
                <li className={styles.listItem}>
                  <CkeckIcon />
                  セキュリティ対策の必要性が分からない
                </li>
                <li className={styles.listItem}>
                  <CkeckIcon />
                  メンテナンスの担当者が社内にいない 
                </li>
              </ul>
          </div>
          <div className={styles.flexItem}>
            {/* <Image 
              src="/gif/MOSHED-2022-4-3-23-26-2 (1).gif" 
              width={500} 
              height={320}
              alt="lazy_phone"
              layout='intrinsic'
            /> */}
          </div>

        </div>
        <p>これらのトラブルはすべて、私が実際にウェブサイト開発の現場で対峙したものです。<br />
        Wordpressで作ったサイトが重すぎて困っているウェブ担当者や、セキュリティの脆弱性を突かれて乗っ取り被害に遭ってしまったサイトをたくさん見てきました。</p>
    </InnerWidth>
  )
}

export default Question
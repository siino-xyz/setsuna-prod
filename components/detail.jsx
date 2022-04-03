import Box from "@mui/material/Box"
import Image from 'next/image'
import InnerTitle from './common/sub-title'
import Paragraph from './common/paragraph'

const Item = (props) => {
  const { sx, ...other } = props
  return (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'flex-start',
      alignItems: 'flex-start',
      p: 0,
      mb: '5rem',
      mt: '4rem',
      ...sx
    }}
    {...other}
  />
  )
}



const Detail = () => {
  return (
    <>
      <Box sx={{
        pb: 5,
        maxWidth: 920,
        mx: 'auto',
      }}>
        <Paragraph 
          paragraph={'jamstack （ジャムスタック）とは、J・A・M（JavaScript・API・Markup）の技術を使用した、ウェブサイトを構築するアーキテクチャの一つです。もちろんこのサイトもjamstackでつくられています。'} 
        />

        <Paragraph 
          paragraph={'jamstackアーキテクチャでは、データベースと通信を行う部分（動的コンテンツ）とそうでない部分（静的コンテンツ）を切り分けてウェブサイトを構築します。ウェブサイトの読み込みが遅くなる要因である動的コンテンツ（ex.ブログ記事、ログイン機能...）を直接サーバーに置かずにウェブAPI経由で実装することで、高速でセキュアなウェブサイトを実現することが可能となります。'} 
        />

        <Paragraph 
          paragraph={'jamstackアーキテクチャでウェブサイトを構築すると、ユーザーにとってどのようなメリットがあるのかを簡単にご紹介します。'} 
        />

        <Item>

          <InnerTitle
              innertitle={'melit1'}
          />

          <Image 
            src='/images/melit-1.svg'
            width={920}
            height={167}
            alt='melit-1'
          />

          <Paragraph 
            paragraph={'速さは正義です。ユーザーがアクセスした時、ページが表示されるまでの読み込み速度は重要なSEOの指標でもあります。高速なコンテンツ表示やリロードなしでのページ遷移など、あらゆる部分でそのスピードを体感することができます。'} 
          />

        </Item>

        <Item>

        <InnerTitle
          innertitle={'melit2'}
        />

          <Image 
            src='/images/melit-2.svg'
            width={920}
            height={167}
            alt='melit-2'
          />

          <Paragraph 
            paragraph={'ウェブサイトに対するサイバー攻撃の多くはサーバーやデータベースを標的にしたものです。動的なサイト（wordpress等）とは異なりサーバやデータベースと切り離された状態でホスティングされるため、サイバー攻撃に対するリスクを大きく抑える事が可能です。100%安全なウェブサイトは存在しませんが、jamstackが動的なウェブサイトに比べ遥かに低コストでセキュアな運用が可能であることは間違い有りません。'}
          />

        </Item>
      </Box>
    </>
  )
}
export default Detail








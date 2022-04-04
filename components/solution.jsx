import Stack from '@mui/material/Stack'
import InnerWidth from '../layouts/inner-width'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'

const StackContainer = (props) => {
  const { sx, ...other} = props;
  return (
    <Stack 
      direction="column"
      justifyContent="center"
      alignItems="baseline"
      spacing={2}
      sx={{
        maxWidth: 860,
        mx: 'auto',
        my: 8,
        ...sx,
      }}
      {...other}
    />
  )
}

const MiniTitle = (props) => {
  const { sx, ...other} = props;
  return (
    <Typography 
      variant='subtitle1'
      component='h3'
      color='common.black'
      sx={{
        background: '#909090',
        px: 1,
        py:0.7,
        borderRadius: '0.2rem',
        textAlign: 'left',
        mb:2,
        "@media screen and (max-width:600px)": {
          width:'100%',
          textAlign: 'center'
        },
        ...sx,
      }}
      {...other}
    />
  )
}

const TextWrapper = styled.div`
  width: 100%;
  @media (max-width: 600px) {
    width: 93%;
    margin: 0 auto !important;
  }
`;


export const Solution = () => {
  return (
    <>
      <InnerWidth>
        <TextWrapper>
          <p>何かトラブルがあるたびに対応するのはリソースがもったいない。<br />
          初めから高速でセキュアなサイトを作ってしまえば、パフォーマンスチューニングやセキュリティ対策のランニングコストを大きく抑えられ、快適な運用ができると思いませんか？</p>

          <p>それを簡単に実現できる方法の1つがJamstack（ジャムスタック）です。<br />
          jamstack とは、J・A・M（JavaScript・API・Markup）の技術を使用した、ウェブサイトを構築するアーキテクチャの一つです。<br />
          技術的な話をするとキリがないので省きますが、コンセプトは非常にシンプルです。<br />
          従来型のウェブページ配信と何が違うのかを簡単に図式化しました。</p>
        </TextWrapper>
        
        <StackContainer>
          <MiniTitle>
            従来型のウェブページ配信（一例）
          </MiniTitle>
          <Image 
            src="/images/ssr-path.svg" 
            width={860}
            height={310}
            alt="twitter-logo"
            layout='intrinsic'
          />
          <TextWrapper>
            <p>ユーザからリクエストを受け取ったサーバは、データベースへデータを取りに行き、都度ページを生成してユーザに返却します。この間ユーザーにはどうしても待ち時間が発生してしまいます。</p>
            <p>また、ユーザーが直接データベースと通信を行うため、セキュリティホールが生まれやすいというデメリットがあります。</p>
          </TextWrapper>
        </StackContainer>

        <StackContainer>
          <MiniTitle>
            Jamstackでのウェブページ配信（一例）
          </MiniTitle>
          <Image 
            src="/images/ssg-path.svg" 
            width={860}
            height={310}
            alt="twitter-logo"
            layout='intrinsic'
          />
          <TextWrapper>
            <p>CDN（Contents Delivery Network）は、世界中に設置されたキャッシュ（代理）サーバを利用することで、効率的にユーザーへコンテンツを提供できる仕組みです。アクセスのあったユーザに最も近いキャッシュサーバからコンテンツを配信するため、高速なだけでなく、サーバの負荷分散にも寄与します。</p>
            <p>ユーザーからアクセスがあるたびに既に構築されているページをそのまま表示するだけなので、サーバが都度データベースへ問い合わせを行う従来型よりも高速なページ表示が可能です。</p>
            <p>特定のサーバを持たないので、セキュリティホールを小さく出来る</p>
          </TextWrapper>
        </StackContainer>
        

      </InnerWidth>
    </>
  )
}

export default Solution
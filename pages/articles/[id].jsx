import { client } from "../../libs/client"
import Image from 'next/image'
import BlogLayout from '../../layouts/blog-layout'
import BlogInnerLayout from '../../layouts/blog-inner-layout'
import LinkButton from '../../components/common/button'
import styles from '../../styles/pages/articles/article.module.scss'

import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  LineIcon,
  LineShareButton,
  PinterestIcon,
  PinterestShareButton
} from "react-share";



export default function ArticlesId({ articles }) {

  return (
    <>
   
      <div className={styles.articleContainer}>

        <div className={styles.eyeCatchWrapper}>
          <Image 
            src={articles.eye_catch.url}
            width={944}
            height={531}
            layout='intrinsic'
            alt="eye_catch"
          />
        </div>

        <div className={styles.contentWrapper}>

          <div className={styles.headerItems}>
            <div className={styles.categoryTag}>
                {articles.categories.name}
            </div>
            <h3 className={styles.postTitle}>
              {articles.title}
            </h3>
            <div className={styles.postDate}>
                {articles.publishedAt}
            </div>       
          </div>

          <div className={styles.textWrapper} dangerouslySetInnerHTML={{
              __html: `${articles.body}`,
            }} 
          />

          
            <div className={styles.shareWrapper}>
              <div className={styles.h4}>
                この記事をシェアする
              </div>
              <div className={styles.shareBtns}>
                <div className={styles.item}>
                  <TwitterShareButton url={[`hhttps://setsuna-dev.vercel.app/articles/${articles.id}`]} title={[articles.title]}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
                <div className={styles.item}>
                  <FacebookShareButton url={[`https://setsuna-dev.vercel.app/articles/${articles.id}`]}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>
                <div className={styles.item}>
                  <LineShareButton url={[`https://setsuna-dev.vercel.app/articles/${articles.id}`]} title={[articles.title]}>
                    <LineIcon size={32} round />
                  </LineShareButton>
                </div>
                <div className={styles.item}>
                  <PinterestShareButton url={[`https://setsuna-dev.vercel.app/articles/articles/${articles.id}`]} media={[`http://localhost:8080/${articles.eye_catch.url}`]} description={[articles.title]}>
                    <PinterestIcon size={32} round />
                  </PinterestShareButton>
                </div>
              </div>
            </div>
          <LinkButton 
            url={'/blog'}
            button={'ブログ一覧に戻る'}
          />
        </div>
      </div>
     

    </>
  );
}


ArticlesId.getLayout = function ArticlesHome(articlesid) {
  return (
    <BlogLayout>
      <BlogInnerLayout>{articlesid}</BlogInnerLayout>
    </BlogLayout>
  )
}


export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", contentId: id });
  

  return {
    props: {
      articles: data,
    },
  };
};

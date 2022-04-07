import styles from '../../styles/components/common/article.module.scss';
import Link from "next/link"
import Articles from "../../models/post"
import Image from 'next/image'

const ArticleCard = ({ articles }: {
  articles: Articles
}) => {
  return (
      <div className={styles.card} key={articles.id}>

        <Link href={`/articles/${articles.id}`} passHref>
          <a>
            <div>
              <Image
                src={articles.eye_catch.url}
                width={330}
                height={190}
                layout='responsive'
                alt="eye_catch"
              />
            </div>
          </a>
        </Link>

        <div className={styles.cardContent}>

          <div className={styles.categoryTag}>
            {articles.categories.name}
          </div>

          <Link href={`/articles/${articles.id}`} passHref>
            <a>
             <h2 className={styles.postTitle}>
              {articles.title}
             </h2>
            </a>
          </Link>

          <div className={styles.postDate}>
            <div>
              {articles.publishedAt}
            </div>
          </div>

        </div>
      </div>
  )
}

export default ArticleCard



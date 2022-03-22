// pages/category/[id].js
import Link from "next/link";
import { client } from "../../libs/client";

import Sat from '../../components/articles'


export default function categoryId({ articles }) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (articles.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <div>
      <ul>
        {articles.map((articles) => (
          <Sat
            articles={articles}
            key={articles.id}
            >
          </Sat>
        ))}
      </ul>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", queries: { filters: `categories[equals]${id}` } });

  return {
    props: {
      articles: data.contents,
    },
  };
};
// pages/articles/[id].js
import { client } from "../../libs/client";

export default function articlesId({ articles }) {
  return (
    <main>
      <h1>{articles.title}</h1>
      <p>{articles.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${articles.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", contentId: id });

  return {
    props: {
      articles: data,
    },
  };
};
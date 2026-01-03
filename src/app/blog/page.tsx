import { resolve } from "path";

// ダミーデータ
const articles = [
  {
    id: "1",
    title: "タイトル1",
  },
  {
    id: "2",
    title: "タイトル2",
  },
  {
    id: "3",
    title: "タイトル3",
  },
];

// 3秒待機設定
async function fetchArticles() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("エラーが発生しました。");
  return articles;
}

export default async function page() {
  const articles = await fetchArticles();
  return (
    <div>
      <ul>
        {articles.map((articles) => (
          <li key={articles.id}>{articles.title}</li>
        ))}
      </ul>
    </div>
  );
}

import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import ArticleItem from "../../components/ArticleItem";
import { nanoid } from "nanoid";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderedArticles = searchResults.map(result => {
    return <ArticleItem pack={result} key={nanoid()} />
  })

  return (
    <div className="w-10/12">
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">搜尋結果</h1>
      <div>{renderedArticles}</div>
    </div>
  );
}
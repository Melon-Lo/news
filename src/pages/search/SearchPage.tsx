import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import ArticleItem from "../../components/ArticleItem";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  console.log(searchResults);

  const renderedArticles = searchResults.map(result => {
    return <ArticleItem pack={result} key={result.title} />
  })

  return (
    <div>
      {renderedArticles}
    </div>
  );
}
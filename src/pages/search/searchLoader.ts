import type { ArticleDetails } from "../../api/types/articleDetails";
import { searchArticles } from "../../api/queries/searchArticles";

export interface SearchLoaderResult {
  searchResults: ArticleDetails[];
}

export async function searchLoader({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    throw new Error('沒有輸入搜尋詞。')
    return
  }

  const results = await searchArticles(term);

  return {
    searchResults: results
  }
}
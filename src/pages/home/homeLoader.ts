import { getTopHeadlines } from "../../api/queries/getTopHeadlines";
import type { TopHeadline } from "../../api/types/TopHeadline";

export interface TopHeadlinesList {
  topHeadlines: TopHeadline[];
}

export async function homeLoader() {
  const topHeadlines = await getTopHeadlines();

  return {
    topHeadlines,
  };
}
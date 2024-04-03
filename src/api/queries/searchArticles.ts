import axios from "axios";
import { apiKey, baseUrl } from "../basicSettings";
import type { ArticleDetails } from "../types/articleDetails";

export async function searchArticles(term: string) {
  try {
    const res = await axios.get(`${baseUrl}/everything?q=${term}&apiKey=${apiKey}`);
    const articles = res.data.articles;

    return articles as ArticleDetails[];
  } catch (err) {
    console.error('[Search Articles Failed]', err)
  }
}
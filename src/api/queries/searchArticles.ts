import axios from "axios";
import { apiKey, baseUrl } from "../basicSettings";
import type { ArticleDetails } from "../types/articleDetails";

export async function searchArticles(term: string) {
  try {
    const res = await axios.get(`${baseUrl}/everything?q=${term}&apiKey=${apiKey}`);
    const articles = res.data.articles;

    const updatedArticles = articles.map((article: { publishedAt: string; }) => {
      return {
        ...article,
        // 讓日期只留下年月日
        publishedAt: article.publishedAt.split('T')[0]
      };
    });

    return updatedArticles as ArticleDetails[];
  } catch (err) {
    console.error('[Search Articles Failed]', err)
  }
}
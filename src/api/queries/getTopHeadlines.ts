import type { TopHeadline } from "../types/TopHeadline"
import axios from "axios";
import { apiKey, baseUrl, defaultCountry } from "../basicSettings";

export async function getTopHeadlines() {
  try {
    const res = await axios.get(`${baseUrl}/top-headlines?country=${defaultCountry}&apiKey=${apiKey}`);
    const articles = res.data.articles;

    const updatedArticles = articles.map(article => {
      return {
        ...article,
        // 讓日期只留下年月日
        publishedAt: article.publishedAt.split('T')[0]
      };
    });

    return updatedArticles as TopHeadline[];
  } catch (err) {
    console.error('[Get Top Headlines Error]', err)
  }
}
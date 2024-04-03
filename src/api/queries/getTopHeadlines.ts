import axios from "axios";
import { apiKey, baseUrl, defaultCountry } from "../basicSettings";
import type { TopHeadline } from "../types/topHeadline"
import { handleDate } from "../../functions/handleString";

export async function getTopHeadlines() {
  try {
    const res = await axios.get(`${baseUrl}/top-headlines?country=${defaultCountry}&apiKey=${apiKey}`);
    const articles = res.data.articles;

    const updatedArticles = articles.map((article: { publishedAt: string; }) => {
      return {
        ...article,
        // 讓日期只留下年月日
        publishedAt: handleDate(article.publishedAt)
      };
    });

    return updatedArticles as TopHeadline[];
  } catch (err) {
    console.error('[Get Top Headlines Failed]', err)
  }
}
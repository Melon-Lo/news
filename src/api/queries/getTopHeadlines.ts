import type { TopHeadline } from "../types/TopHeadline"
import axios from "axios";
import { apiKey, baseUrl, defaultCountry } from "../basicSettings";

export async function getTopHeadlines() {
  try {
    const res = await axios.get(`${baseUrl}/top-headlines?country=${defaultCountry}&apiKey=${apiKey}`);
    const articles = res.data.articles;
    console.log(articles);
    return articles as TopHeadline[];
  } catch (err) {
    console.error('[Get Top Headlines Error]', err)
  }
}
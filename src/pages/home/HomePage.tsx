import type { TopHeadlinesList } from "./homeLoader";
import { useLoaderData } from "react-router-dom";
import TopHeadlineItem from "../../components/TopHeadlineItem";
import { nanoid } from "nanoid";

export default function HomePage() {
  const { topHeadlines } = useLoaderData() as TopHeadlinesList;

  const renderedTopHeadlines = topHeadlines.map(topHeadline => {
    return <TopHeadlineItem pack={topHeadline} key={nanoid()} />
  })

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-10 mb-5">本日頭條</h1>
      <div className="flex flex-col items-center">
        {renderedTopHeadlines}
      </div>
    </div>
  );
}
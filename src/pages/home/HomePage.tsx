import type { TopHeadlinesList } from "./homeLoader";
import { useLoaderData } from "react-router-dom";
import TopHeadlineItem from "../../components/TopHeadlineItem";

export default function HomePage() {
  const { topHeadlines } = useLoaderData() as TopHeadlinesList;

  const renderedTopHeadlines = topHeadlines.map(topHeadline => {
    return <TopHeadlineItem key={topHeadline.title} pack={topHeadline} />
  })

  return (
    <div>
      {renderedTopHeadlines}
    </div>
  );
}
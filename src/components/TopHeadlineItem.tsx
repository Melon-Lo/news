import type { TopHeadline } from "../api/types/topHeadline";
import { useContext } from "react";
import { ArticleContext } from "../contexts/articleContext";
import { useNavigate } from "react-router-dom";

interface TopHeadlineItemProps {
  pack: TopHeadline;
}

interface Article {
  author: string,
  title: string,
  description: string,
  content: string,
  publishedAt: string,
}

export default function TopHeadlineItem({ pack }: TopHeadlineItemProps) {
  const navigate = useNavigate();
  const { setSelectedArticle, selectedArticle } = useContext(ArticleContext);

  const handleClick = () => {
    setSelectedArticle(pack);
    navigate(`news/${pack.title}`);
    console.log(selectedArticle);
  }

  return (
    <div className="border-2 border-gray-300 w-10/12 rounded-lg my-3 p-3 cursor-pointer">
      <div className="flex justify-between text-gray-500">
        <p>{pack.author}</p>
        <p className="pr-4">{pack.publishedAt}</p>
      </div>
      <h1 onClick={handleClick} className="text-lg font-medium my-3">{pack.title}</h1>
    </div>
  );
}
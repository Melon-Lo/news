import type { TopHeadline } from "../api/types/topHeadline";

interface TopHeadlineItemProps {
  pack: TopHeadline;
}

export default function TopHeadlineItem({ pack }: TopHeadlineItemProps) {
  return (
    <div className="border-2 border-gray-300 w-10/12 rounded-lg my-3 p-3 cursor-pointer">
      <div className="flex justify-between text-gray-500">
        <p>{pack.author}</p>
        <p className="pr-4">{pack.publishedAt}</p>
      </div>
      <h1 className="text-lg font-medium my-3">{pack.title}</h1>
    </div>
  );
}
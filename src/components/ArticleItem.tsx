import type { ArticleDetails } from "../api/types/articleDetails";
// import { Link } from "react-router-dom";
import altImg from "../assets/alternative-article-img.jpg"

interface ArticleItemProps {
  pack: ArticleDetails;
}

export default function ArticleItem({ pack }: ArticleItemProps) {
  const imgSrc = pack.urlToImage ? pack.urlToImage : altImg

  return (
    <div className="w-full border-2 border-gray-300 rounded my-10 flex flex-col md:flex-row rounded-xl overflow-hidden">
      <div className="md:w-1/2">
        <img className="h-full object-cover w-full" src={imgSrc} alt={'新聞圖片：' + pack.title} />
      </div>
      <div className="md:w-1/2 p-5">
        <div className="flex justify-between items-center text-gray-500">
          <p>{pack.author}</p>
          <p className="min-w-24">{pack.publishedAt}</p>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 py-3">{pack.title}</h1>
        <p className="text-gray-800 break-words">
          {pack.description}
        </p>
        <button className="flex justify-end w-full pt-5">
          <span className="bg-blue-800 text-gray-100 py-3 px-5 rounded-lg">查看更多</span>
        </button>
      </div>
    </div>
  );
}
import type { ArticleDetails } from "../api/types/articleDetails";
import { Link } from "react-router-dom";

interface ArticleItemProps {
  pack: ArticleDetails;
}

export default function ArticleItem({ pack }: ArticleItemProps) {
  return (
    <div>
      <div>
        <img src={pack.urlToImage} alt={'新聞圖片：' + pack.title} />
      </div>
      <div>
        <div>
          <p>{pack.author}</p>
          <p>{pack.publishedAt}</p>
        </div>
        <h1>{pack.title}</h1>
        <p>
          {pack.description}
        </p>
      </div>
      <button>閱讀新聞</button>
    </div>
  );
}
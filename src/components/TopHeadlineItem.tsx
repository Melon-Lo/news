import type { TopHeadline } from "../api/types/TopHeadline";

interface TopHeadlineItemProps {
  pack: TopHeadline;
}

export default function TopHeadlineItem({ pack }: TopHeadlineItemProps) {
  return (
    <div>
      {pack.title}
    </div>
  );
}
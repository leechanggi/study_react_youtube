import ReactTimeAgo from "react-time-ago";

interface PLastSeen {
  date: number;
  locale: string;
  className?: string;
}

export default function LastSeen({ date, locale, className }: PLastSeen) {
  const newDate = new Date(date);
  return <ReactTimeAgo className={className} date={newDate.getTime()} locale={locale} />;
}

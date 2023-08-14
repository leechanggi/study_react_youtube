import { Link } from "react-router-dom";
import LastSeen from "./LastSeen";

export default function VideoItem({ video }: any) {
  const snippet = video.snippet;
  return (
    <li className="item">
      <Link to={`/videos/watch/${video.id}`}>
        <img className="item_img" src={snippet.thumbnails.medium.url} alt={snippet.title} />
        <div className="item_info">
          <p className="info_title ellipsis-2">{snippet.title}</p>
          <p className="info_channelTitle ellipsis">{snippet.channelTitle}</p>
          <LastSeen className="info_timeago ellipsis" date={snippet.publishedAt} locale="en" />
        </div>
      </Link>
    </li>
  );
}

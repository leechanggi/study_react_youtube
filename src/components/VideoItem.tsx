import { Link } from "react-router-dom";
import LastSeen from "./LastSeen";

export default function VideoItem({ video }: any) {
  return (
    <li className="item">
      <Link to={`/videos/watch/${video.id}`}>
        <img
          className="item_img"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="item_info">
          <div className="info_img">
            <img
              src={video.channel.snippet.thumbnails.default.url}
              alt={video.channel.snippet.channelTitle}
            />
          </div>
          <div className="info_description">
            <p className="info_title ellipsis-2">{video.snippet.title}</p>
            <p className="info_channelTitle ellipsis">{video.snippet.channelTitle}</p>
            <LastSeen
              className="info_timeago ellipsis"
              date={video.snippet.publishedAt}
              locale="en"
            />
          </div>
        </div>
      </Link>
    </li>
  );
}

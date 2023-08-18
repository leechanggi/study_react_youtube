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
              className="img"
              src={video.channel.snippet.thumbnails.default.url}
              alt={video.channel.snippet.channelTitle}
            />
          </div>
          <div className="info_des">
            <p className="des_title ellipsis-2">{video.snippet.title}</p>
            <p className="des_channelTitle ellipsis">{video.channel.snippet.channelTitle}</p>
            <p className="des_etc">
              <span className="dex_viewCount">{`${video.channel.statistics.viewCount} view`}</span>
              <LastSeen className="des_timeago" date={video.snippet.publishedAt} locale="en" />
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

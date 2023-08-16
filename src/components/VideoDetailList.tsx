import { Link } from "react-router-dom";
import LastSeen from "./LastSeen";

export default function VideoDetailList({ data }: any) {
  return (
    <ul className="list">
      {data.map((video: any) => (
        <li className="item" key={video.id}>
          <Link className="item_link" to={`/videos/watch/${video.id}`}>
            <div className="item_img">
              <img
                className="img"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
            </div>
            <div className="item_info">
              <p className="info_title ellipsis-2">{video.snippet.title}</p>
              <p className="info_channelTitle ellipsis">{video.snippet.channelTitle}</p>
              <LastSeen
                className="info_timeago ellipsis"
                date={video.snippet.publishedAt}
                locale="en"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

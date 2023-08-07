import { Link } from "react-router-dom";

export default function VideoItem({ data }: any) {
  const snippet = data.snippet;
  return (
    <li className="video_item">
      <Link to={`/videos/watch/${data.id}`}>
        <img className="item_img" src={snippet.thumbnails.medium.url} alt={snippet.title} />
        <div className="item_info">
          <p className="info_title ellipsis-2">{snippet.title}</p>
          <p className="info_channelTitle ellipsis">{snippet.channelTitle}</p>
        </div>
      </Link>
    </li>
  );
}

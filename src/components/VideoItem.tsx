import { Link } from "react-router-dom";

export default function VideoItem({ data }: any) {
  return (
    <li className="video_item">
      <Link to={`/videos/watch/${data.id}`}>
        <img
          className="item_img"
          src={data.snippet.thumbnails.medium.url}
          alt={data.snippet.title}
        />
        <div className="item_info">
          <div className="info_img">
            <img src={data.snippet.thumbnails.default.url} alt={data.snippet.channelTitle} />
          </div>
          <div className="info_data">
            <p className="data_title ellipsis-2">{data.snippet.title}</p>
            <p className="data_channelTitle ellipsis">{data.snippet.channelTitle}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

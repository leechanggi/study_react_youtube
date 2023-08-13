import { useLocation } from "react-router-dom";
import VideoIframe from "../components/VideoIframe";

export default function VideoDetail() {
  const location = useLocation();
  const videoId = location.pathname.split("/")[3];

  return (
    <div className="videoDetail">
      <div className="videoDetail_vedio">
        <VideoIframe videoId={videoId} />
        <div className="video_info"></div>
        <div className="video_comment"></div>
      </div>
      <div className="videoDetail_list"></div>
    </div>
  );
}

import { useSearchParams } from "react-router-dom";
import VideoList from "../components/VideoList";
import VideoService from "../service/video";

export interface PVideos {
  videoService: VideoService;
}

export default function Videos({ videoService }: PVideos) {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q") !== undefined ? searchParams.get("q") : null;

  return <VideoList videoService={videoService} keyword={keyword} />;
}

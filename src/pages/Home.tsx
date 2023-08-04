import VideoList from "../components/VideoList";
import VideoService from "../service/video";

export interface PHome {
  videoService: VideoService;
}

function Home({ videoService }: PHome) {
  return <VideoList videoService={videoService} />;
}

export default Home;

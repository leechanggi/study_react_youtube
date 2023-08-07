import { useEffect, useState } from "react";
import VideoService from "../service/video";
import VideoItem from "./VideoItem";

export interface PVideoList {
  videoService: VideoService;
  q?: string | null;
}

export default function VideoList({ videoService, q }: PVideoList) {
  const [error, setError] = useState<string | undefined>();
  const [videoList, setVideoList] = useState<any[]>([]);

  useEffect(() => {
    videoService
      .getVideoItems()
      .then((video) => setVideoList(video.items))
      .catch(onError);
  }, [videoService]);

  const onError = (error: any) => {
    setError(error.toString());
    setTimeout(() => {
      setError(undefined);
    }, 3000);
  };

  return (
    <div className="video">
      {typeof error !== "string" ? (
        <ul className="video_list">
          {videoList.map((video) => {
            return <VideoItem data={video} key={video.id} />;
          })}
        </ul>
      ) : (
        <p className="video_error">{error}</p>
      )}
    </div>
  );
}

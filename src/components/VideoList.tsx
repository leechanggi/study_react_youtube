import { useEffect, useState } from "react";
import VideoService from "../service/video";
import VideoItem from "./VideoItem";

export interface PVideoList {
  videoService: VideoService;
}
export interface IVideo {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export default function VideoList({ videoService }: PVideoList) {
  const [error, setError] = useState("");
  const [videoList, setVideoList] = useState<IVideo[]>([]);

  useEffect(() => {
    videoService
      .getVideoItems()
      .then((video) => setVideoList(video))
      .catch(onError);
  }, [videoService]);

  const onError = (error: any) => {
    setError(error.toString());
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <div className="video">
      <ul className="video_list">
        {videoList.map((video, index) => {
          return <VideoItem data={video} key={index} /*key={video.id.videoId}*/ />;
        })}
      </ul>
    </div>
  );
}

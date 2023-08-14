import { useContext } from "react";
import { VideosContext } from "../contexts/VideosContextProvider";
import VideoItem from "./VideoItem";
import VideoListSkeleton from "./VideoListSkeleton";

export default function VideoList() {
  const { videosIsLoading, videosIsFetching, videosError, videosData } = useContext(VideosContext);

  return (
    <div className="video">
      {videosError !== null && videosError !== undefined ? (
        <p className="video_error">일시적 네트워크 장애가 발생하였습니다.</p>
      ) : videosIsLoading === true || videosIsFetching === true ? (
        <VideoListSkeleton />
      ) : videosData === undefined ? (
        <p className="video_error">일시적 네트워크 장애가 발생하였습니다.</p>
      ) : (
        <ul className="video_list">
          {videosData.map((video: any) => {
            return <VideoItem video={video} key={video.id} />;
          })}
        </ul>
      )}
    </div>
  );
}

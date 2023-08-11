import { useContext } from "react";
import { VideosContext } from "../contexts/VideosContextProvider";
import VideoItem from "./VideoItem";
import VideoListSkeleton from "./VideoListSkeleton";

export default function VideoList() {
  const { isLoading, isFetching, error, data } = useContext(VideosContext);

  return (
    <div className="video">
      {error !== null && error !== undefined ? (
        <p className="video_error">일시적 네트워크 장애가 발생하였습니다.</p>
      ) : isLoading === true || isFetching === true ? (
        <VideoListSkeleton />
      ) : data === undefined ? (
        <p className="video_error">일시적 네트워크 장애가 발생하였습니다.</p>
      ) : (
        <ul className="video_list">
          {data.map((video: any) => {
            return <VideoItem data={video} key={video.id} />;
          })}
        </ul>
      )}
    </div>
  );
}

import { useContext, useEffect } from "react";
import { VideosContext } from "../contexts/VideosContextProvider";
import VideoItem from "../components/VideoItem";
import VideoListSkeleton from "../components/VideoListSkeleton";

export default function Videos() {
  const { data, error, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useContext(VideosContext);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
          {/* {data.pages[0].items.map((video: any) => {
            return <VideoItem video={video} key={video.id} />;
          })} */}
        </ul>
      )}
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";

import VideoService from "../service/video";
import VideoItem from "./VideoItem";
import VideoListSkeleton from "./VideoListSkeleton";

export interface PVideoList {
  videoService: VideoService;
  keyword: string | null;
}

export default function VideoList({ videoService, keyword }: PVideoList) {
  const queryKey = ["videos", { keyword }];
  const queryFn = async () => {
    if (keyword !== null) {
      return videoService.getVideoItemsFromKeyword(keyword);
    } else {
      return videoService.getVideoItems();
    }
  };
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey,
    queryFn,
    staleTime: 1000 * 5,
  });

  return (
    <div className="video">
      {error !== null ? (
        <p className="video_error">일시적 장애입니다.</p>
      ) : isLoading === true || isFetching === true ? (
        <VideoListSkeleton />
      ) : data === undefined ? (
        <p className="video_error">일시적 장애입니다.</p>
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

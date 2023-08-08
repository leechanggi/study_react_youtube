import { useQuery, useQueryClient } from "@tanstack/react-query";

import VideoService from "../service/video";
import VideoItem from "./VideoItem";
import VideoListSkeleton from "./VideoListSkeleton";

export interface PVideoList {
  videoService: VideoService;
  q?: string | null;
}

export default function VideoList({ videoService, q }: PVideoList) {
  const queryKey = ["videos"];
  const queryFn = () => videoService.getVideoItems();
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey,
    queryFn,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="video">
      {error !== null ? (
        `에러메시지 출력`
      ) : isLoading === true || isFetching === true ? (
        <VideoListSkeleton />
      ) : (
        <ul className="video_list">
          {data.items.map((video: { id: string }) => {
            return <VideoItem data={video} key={video.id} />;
          })}
        </ul>
      )}
      <VideoListSkeleton />
    </div>
  );
}

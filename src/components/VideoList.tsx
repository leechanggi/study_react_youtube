import { Suspense } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import VideoService from "../service/video";
import VideoItem from "./VideoItem";
import ErrorFallback from "./ErrorFallback";
import VideoListSkeleton from "./VideoListSkeleton";

export interface PVideoList {
  videoService: VideoService;
  q?: string | null;
}

export default function VideoList({ videoService, q }: PVideoList) {
  const client = useQueryClient();
  const queryKey = ["videos"];
  const queryFn = () => videoService.getVideoItems();
  const { isFetched, error, data } = useQuery({
    queryKey,
    queryFn,
    staleTime: 1000 * 60 * 5,
    suspense: true,
    useErrorBoundary: true,
  });

  return (
    <div className="video">
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<VideoListSkeleton />}>
          <ul className="video_list">
            {data.items.map((video: { id: string }) => {
              return <VideoItem data={video} key={video.id} />;
            })}
          </ul>
        </Suspense>
      </ErrorBoundary> */}
      <VideoListSkeleton />
    </div>
  );
}

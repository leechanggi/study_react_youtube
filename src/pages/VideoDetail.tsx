import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import VideoDetailInfo from "../components/VideoDetailInfo";
import VideoDetailInfoSkeleton from "../components/VideoDetailInfoSkeleton";

export default function VideoDetail({ videoService }: any) {
  const location = useLocation();
  const locationPath = location.pathname.split("/");
  const videoId = locationPath[3];

  const [videoData, setVideoData] = useState<any>(null);
  const [videoError, setVideoError] = useState<string>("");

  useEffect(() => {
    async function fetchVideoData() {
      try {
        const video = await videoService.getVideosByVideoId(videoId);
        setVideoData(video[0]);
      } catch (error) {
        onError(error as Error);
      }
    }
    fetchVideoData();
  }, [videoId, videoService]);

  const onError = (error: Error) => {
    setVideoError(error.toString());
    setTimeout(() => {
      setVideoError("");
    }, 3000);
  };

  return (
    <div className="videoDetail">
      <div className="videoDetail_vedio">
        {videoError ? (
          <p className="videoDetail_error">{videoError}</p>
        ) : videoData ? (
          <>
            <VideoDetailInfo data={videoData} />
            <VideoDetailInfoSkeleton />
          </>
        ) : (
          <VideoDetailInfoSkeleton />
        )}
        {/* 댓글 */}
        <div className="video_comment"></div>
      </div>
      <div className="videoDetail_list"></div>
    </div>
  );
}

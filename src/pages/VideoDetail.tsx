import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import VideoDetailInfo from "../components/VideoDetailInfo";
import VideoDetailInfoSkeleton from "../components/VideoDetailInfoSkeleton";
import VideoDetailList from "../components/VideoDetailList";

export default function VideoDetail({ videoService }: any) {
  const location = useLocation();
  const locationPath = location.pathname.split("/");
  const videoId = locationPath[3];

  const [videoData, setVideoData] = useState<any>(null);
  const [topicData, setTopicData] = useState<string>("");
  const [videoError, setVideoError] = useState<string>("");
  const [topicError, setTopicError] = useState<string>("");

  useEffect(() => {
    async function fetchVideoData() {
      try {
        const video = await videoService.getVideosByVideoId(videoId);
        setVideoData(video[0]);
      } catch (error) {
        const videoError = error as Error;
        setVideoError(videoError.toString());
        setTimeout(() => {
          setVideoError("");
        }, 3000);
      }
    }
    async function fetchTopicData() {
      try {
        const video = await videoService.getVideosByTopicId(videoId);
        setTopicData(video);
      } catch (error) {
        const topicError = error as Error;
        setTopicError(topicError.toString());
        setTimeout(() => {
          setTopicError("");
        }, 3000);
      }
    }
    fetchVideoData();
    fetchTopicData();
  }, [videoId, videoService]);

  return (
    <div className="videoDetail">
      <div className="videoDetail_vedio">
        {videoError ? (
          <p className="videoDetail_error">{videoError}</p>
        ) : videoData ? (
          <VideoDetailInfo data={videoData} />
        ) : (
          <VideoDetailInfoSkeleton />
        )}
      </div>
      <div className="videoDetail_list">
        {topicError ? (
          <p className="videoDetail_error">{topicError}</p>
        ) : topicData ? (
          <VideoDetailList data={topicData} />
        ) : (
          <p>로딩 중...</p>
        )}
      </div>
    </div>
  );
}

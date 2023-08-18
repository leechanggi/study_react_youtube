import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { VideosContext } from "../contexts/VideosContextProvider";
import VideoItem from "../components/VideoItem";
import VideoListSkeleton from "../components/VideoListSkeleton";

export default function Videos() {
  const { videosIsLoading, videosIsFetching, videosError, videosData } = useContext(VideosContext);
  const { t } = useTranslation();

  return (
    <div className="video">
      {videosError !== null && videosError !== undefined ? (
        <p className="video_error">{t(`videos.error`)}</p>
      ) : videosIsLoading === true || videosIsFetching === true ? (
        <VideoListSkeleton />
      ) : videosData === undefined ? (
        <p className="video_error">{t(`videos.error`)}</p>
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

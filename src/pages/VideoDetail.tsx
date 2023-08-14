import { useState, useEffect, SetStateAction } from "react";
import { useLocation } from "react-router";
import VideoIframe from "../components/VideoIframe";

export default function VideoDetail({ videoService }: any) {
  const location = useLocation();
  const locationPath = location.pathname.split("/");
  const videoId = locationPath[3];
  const [togglebox, setTogglebox] = useState(false);
  const [videoData, setVideoData] = useState<any>({});
  const [error, setError] = useState("");

  const handelTogglebox = (conVal: boolean) => {
    conVal === true
      ? togglebox === true && setTogglebox(false)
      : togglebox !== true && setTogglebox(true);
  };

  useEffect(() => {
    videoService
      .getVideosByVideoId(videoId)
      .then((video: any) => setVideoData(video))
      .catch((error: any) => onError(error));
  }, [videoId, videoService]);

  useEffect(() => {
    console.log(videoData);
  }, [videoData]);

  const onError = (error: { toString: () => SetStateAction<string> }) => {
    setError(error.toString());
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <div className="videoDetail">
      <div className="videoDetail_vedio">
        {error && <p className="videoDetail_error">{error}</p>}
        {videoData.length === 0 ? (
          <p className="videoDetail_error">일시적 네트워크 장애가 발생하였습니다.</p>
        ) : (
          <>
            <VideoIframe videoId={videoData[0].id} />
            <div className="video_info">
              <h1 className="info_title">{videoData[0].snippet.title}</h1>
              <div
                className="info_box"
                role={togglebox === true ? "" : "button"}
                data-togglebox={togglebox}
                onClick={() => handelTogglebox(false)}
              >
                <p className={`description${togglebox === true ? "" : " ellipsis-3"}`}>
                  {videoData[0].snippet.description}
                </p>
                {togglebox === true ? (
                  <button className="sub" type="button" onClick={() => handelTogglebox(true)}>
                    간략히
                  </button>
                ) : (
                  <span className="sub">...더보기</span>
                )}
              </div>
            </div>
          </>
        )}
        <div className="video_comment"></div>
      </div>
      <div className="videoDetail_list"></div>
    </div>
  );
}

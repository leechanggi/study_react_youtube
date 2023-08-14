import { useState } from "react";
import VideoIframe from "./VideoIframe";

export default function VideoDetailInfo({ data }: any) {
  const [togglebox, setTogglebox] = useState(false);

  const handelTogglebox = (conVal: boolean) => {
    if ((conVal && togglebox) || (!conVal && !togglebox)) {
      setTogglebox(!togglebox);
    }
  };

  return (
    <>
      <VideoIframe videoId={data.id} />
      <div className="video_info">
        <h1 className="info_title">{data.snippet.title}</h1>
        <div
          className="info_box"
          role={togglebox ? "" : "button"}
          data-togglebox={togglebox}
          onClick={() => handelTogglebox(false)}
        >
          <p className={`description${togglebox ? "" : " ellipsis-3"}`}>
            {data.snippet.description}
          </p>
          {togglebox ? (
            <button className="sub" type="button" onClick={() => handelTogglebox(true)}>
              간략히
            </button>
          ) : (
            <span className="sub">...더보기</span>
          )}
        </div>
      </div>
    </>
  );
}

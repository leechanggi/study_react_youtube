import { useState, useContext } from "react";
import { PiShareFat } from "react-icons/pi";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import VideoIframe from "./VideoIframe";

export default function VideoDetailInfo({ data }: any) {
  const [togglebox, setTogglebox] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handelTogglebox = (conVal: boolean) => {
    if ((conVal && togglebox) || (!conVal && !togglebox)) {
      setTogglebox(!togglebox);
    }
  };

  return (
    <>
      <VideoIframe videoId={data.id} />
      <div className="video_info">
        <h1 className="info_title ellipsis-2">{data.snippet.title}</h1>
        <div className="info_channel">
          <div className="channel_des">
            <img
              className="des_img"
              src={data.channel.snippet.thumbnails.default.url}
              alt={data.channel.snippet.title}
            />
            <div className="des_info">
              <h2 className="info_title">{data.channel.snippet.title}</h2>
              <div className="info_subscriberCount">{`${data.channel.statistics.subscriberCount} 명`}</div>
            </div>
          </div>
          <div className="channel_button">
            <button className="button" type="button">
              <PiShareFat size={16} color={theme ? "#ffffff" : "#000000"} />
              공유
            </button>
          </div>
        </div>
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

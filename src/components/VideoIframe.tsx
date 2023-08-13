import YouTube, { YouTubeProps } from "react-youtube";

export default function VideoIframe({ videoId }: { videoId: string }) {
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube className="video_iframe" videoId={videoId} opts={opts}></YouTube>;
}

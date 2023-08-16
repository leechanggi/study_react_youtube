import YouTube, { YouTubeProps } from "react-youtube";

export default function VideoIframe({ videoId }: { videoId: string }) {
  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube className="video_iframe" videoId={videoId} opts={opts}></YouTube>;
}

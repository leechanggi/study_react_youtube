import VideoItemSkeleton from "./VideoItemSkeleton";

function repeatVideoItem() {
  let arr = [];
  for (let i = 0; i < 25; i++) {
    arr.push(<VideoItemSkeleton key={i} />);
  }
  return arr;
}

export default function VideoListSkeleton() {
  return <ul className="video_list skeleton">{repeatVideoItem()}</ul>;
}

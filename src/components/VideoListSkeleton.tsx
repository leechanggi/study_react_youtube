import VideoItemSkeleton from "./VideoItemSkeleton";

function repeatVideoItem() {
  let arr = [];
  for (let i = 0; i < 25; i++) {
    arr.push(<VideoItemSkeleton />);
  }
  return arr;
}

export default function VideoListSkeleton() {
  return <ul className="video_list">{repeatVideoItem()}</ul>;
}

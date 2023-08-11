import { useSearchParams } from "react-router-dom";
import VideoList from "../components/VideoList";

export default function Videos() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q") !== undefined ? searchParams.get("q") : null;

  return <VideoList keyword={keyword} />;
}

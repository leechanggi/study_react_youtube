import VideoItem from './VideoItem';
import { IItem } from '../pages/Home';

export interface PropsVideoList {
	data: IItem[];
}

function VideoList({ data }: PropsVideoList) {
	return (
		<div className="video">
			<ul className="video_list">
				{data.map(item => {
					return <VideoItem data={item} key={item.id.videoId} />;
				})}
			</ul>
		</div>
	);
}

export default VideoList;

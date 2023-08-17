import HttpClient from "../network/http";

export default class VideoService {
  private http: HttpClient;
  private MODE_DEV?: boolean;
  private API_KEY?: string;

  constructor(httpClient: HttpClient, MODE_DEV: boolean, API_KEY?: string) {
    this.http = httpClient;
    this.MODE_DEV = MODE_DEV;
    this.API_KEY = API_KEY;
  }

  private async getVideosWithChannelInfo(videos: any[]) {
    return Promise.all(
      videos.map(async (video: any) => {
        const channelInfo = await this.getChannelsByVideoId(video.id);
        return { ...video, channel: channelInfo[0] };
      })
    );
  }

  async getVideos() {
    const videos =
      this.MODE_DEV === true
        ? await this.http.fetch("/data/videos.json", { method: "GET" }).then((data) => data.items)
        : await this.http
            .fetch("/videos", {
              method: "GET",
              params: {
                part: "snippet,statistics",
                chart: "mostPopular",
                maxResults: "24",
                key: this.API_KEY,
              },
            })
            .then((data) => data.items);

    return this.getVideosWithChannelInfo(videos);
  }

  async getVideosByKeyword(keyword: string) {
    const videos =
      this.MODE_DEV === true
        ? await this.http.fetch("/data/videosByKeyword.json", { method: "GET" }).then((data) =>
            data.items.map((item: { id: { videoId: string } }) => ({
              ...item,
              id: item.id.videoId,
            }))
          )
        : await this.http
            .fetch("/search", {
              method: "GET",
              params: {
                part: "snippet",
                maxResults: "24",
                type: "video",
                q: keyword,
                key: this.API_KEY,
              },
            })
            .then((data) =>
              data.items.map((item: { id: { videoId: string } }) => ({
                ...item,
                id: item.id.videoId,
              }))
            );

    return this.getVideosWithChannelInfo(videos);
  }

  async getVideosByVideoId(videoId: string) {
    const videos =
      this.MODE_DEV === true
        ? await this.http
            .fetch("/data/videosByVideoId.json", { method: "GET" })
            .then((data) => data.items)
        : await this.http
            .fetch("videos", {
              method: "GET",
              params: {
                part: "snippet,statistics",
                id: videoId,
                key: this.API_KEY,
              },
            })
            .then((data) => data.items);

    return this.getVideosWithChannelInfo(videos);
  }

  async getVideosByTopicId(topicId: string) {
    const videos =
      this.MODE_DEV === true
        ? await this.http.fetch("/data/videosByTopicId.json", { method: "GET" }).then((data) =>
            data.items.map((item: { id: { videoId: string } }) => ({
              ...item,
              id: item.id.videoId,
            }))
          )
        : await this.http
            .fetch("search", {
              method: "GET",
              params: {
                part: "snippet",
                maxResults: "8",
                type: "video",
                topicId: topicId,
                key: this.API_KEY,
              },
            })
            .then((data) =>
              data.items.map((item: { id: { videoId: string } }) => ({
                ...item,
                id: item.id.videoId,
              }))
            );

    return this.getVideosWithChannelInfo(videos);
  }

  async getChannelsByVideoId(videoId: string) {
    if (this.MODE_DEV === true) {
      return this.http
        .fetch("/data/channelsById.json", { method: "GET" })
        .then((data) => data.items);
    } else {
      return this.http
        .fetch("search", {
          method: "GET",
          params: {
            part: "snippet,statistics,id",
            id: videoId,
            key: this.API_KEY,
          },
        })
        .then((data) => data.items);
    }
  }
}

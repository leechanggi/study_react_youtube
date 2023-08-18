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

  private async getVideosWithChannelInfo(items: any[]) {
    return Promise.all(
      items.map(async (item: any) => {
        const channelInfo = await this.getChannelsByChannelId(item.snippet.channelId);
        return { ...item, channel: channelInfo[0] };
      })
    );
  }

  async getVideos(pageParam?: string) {
    const response = await this.http.fetch(this.MODE_DEV ? "/data/videos.json" : "/videos", {
      method: "GET",
      params: {
        part: "snippet,statistics",
        chart: "mostPopular",
        maxResults: "24",
        key: this.API_KEY,
        pageToken: pageParam,
      },
    });
    const items = response.items;
    return {
      items: this.getVideosWithChannelInfo(items),
      nextPageToken: response.nextPageToken || null,
    };
  }

  async getVideosByKeyword(keyword: string, pageParam?: string) {
    const response = await this.http.fetch(
      this.MODE_DEV ? "/data/videosByKeyword.json" : "/search",
      {
        method: "GET",
        params: {
          part: "snippet",
          maxResults: "24",
          type: "video",
          q: keyword,
          key: this.API_KEY,
          pageToken: pageParam,
        },
      }
    );
    const items = response.items.map((item: { id: { videoId: string } }) => ({
      ...item,
      id: item.id.videoId,
    }));
    return {
      items: this.getVideosWithChannelInfo(items),
      nextPageToken: response.nextPageToken || null,
    };
  }

  async getVideosByVideoId(videoId: string) {
    const response = await this.http.fetch(
      this.MODE_DEV ? "/data/videosByVideoId.json" : "videos",
      {
        method: "GET",
        params: {
          part: "snippet,statistics",
          id: videoId,
          key: this.API_KEY,
        },
      }
    );
    return this.getVideosWithChannelInfo(response.items);
  }

  async getVideosByTopicId(topicId: string) {
    const response = await this.http.fetch(
      this.MODE_DEV ? "/data/videosByTopicId.json" : "search",
      {
        method: "GET",
        params: {
          part: "snippet",
          maxResults: "8",
          type: "video",
          topicId: topicId,
          key: this.API_KEY,
        },
      }
    );
    const items = response.items.map((item: { id: { videoId: string } }) => ({
      ...item,
      id: item.id.videoId,
    }));
    return this.getVideosWithChannelInfo(items);
  }

  async getChannelsByChannelId(channelId: string) {
    const response = await this.http.fetch(
      this.MODE_DEV ? "/data/channelsByChannelId.json" : "channels",
      {
        method: "GET",
        params: {
          part: "id,snippet,statistics",
          id: channelId,
          key: this.API_KEY,
        },
      }
    );
    return response.items;
  }
}

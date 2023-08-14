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

  // 핫트랜드 비디오 찾기
  async getVideos() {
    if (this.MODE_DEV === true) {
      return this.http
        .fetch("/data/hotTrend.json", {
          method: "GET",
        })
        .then((data) => data.items);
    } else {
      return this.http
        .fetch("/videos", {
          method: "GET",
          params: {
            part: "snippet",
            chart: "mostPopular",
            maxResults: "16",
            key: this.API_KEY,
          },
        })
        .then((data) => data.items);
    }
  }

  // 키워드로 영상 찾기
  async getVideosByKeyword(keyword: string) {
    if (this.MODE_DEV === true) {
      return this.http
        .fetch("/data/searchKeyword.json", {
          method: "GET",
        })
        .then((data) =>
          data.items.map((item: { id: { videoId: string } }) => ({ ...item, id: item.id.videoId }))
        );
    } else {
      return this.http
        .fetch("/search", {
          method: "GET",
          params: {
            part: "snippet",
            maxResults: "16",
            q: keyword,
            key: this.API_KEY,
          },
        })
        .then((data) =>
          data.items.map((item: { id: { videoId: any } }) => ({ ...item, id: item.id.videoId }))
        );
    }
  }

  // 아이디로 특정 영상 찾기
  async getVideosByVideoId(videoId: string) {
    if (this.MODE_DEV === true) {
      return false;
    } else {
      return this.http
        .fetch("videos", {
          method: "GET",
          params: {
            part: "snippet",
            id: videoId,
            key: this.API_KEY,
          },
        })
        .then((data) => data.items);
    }
  }

  // 관련영상 목록 찾기
  async getRelatedVideosByVideoId(videoId: string) {
    if (this.MODE_DEV === true) {
      return this.http
        .fetch("/data/relatedVideo.json", { method: "GET" })
        .then((data) =>
          data.items.map((item: { id: { videoId: any } }) => ({ ...item, id: item.id.videoId }))
        );
    } else {
      return this.http.fetch("search", {
        method: "GET",
        params: {
          part: "snippet",
          maxResults: "10",
          type: "video",
          relatedToVideoId: videoId,
          key: this.API_KEY,
        },
      });
    }
  }
}

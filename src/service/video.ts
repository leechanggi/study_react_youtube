import HttpClient from "../network/http";

export default class VideoService {
  private http: HttpClient;
  private API_KEY?: string;

  constructor(httpClient: HttpClient, API_KEY?: string) {
    this.http = httpClient;
    this.API_KEY = API_KEY;
  }

  async getVideoItems() {
    if (typeof this.API_KEY === "string") {
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
    } else {
      return this.http
        .fetch("/data/hotTrend.json", {
          method: "GET",
        })
        .then((data) => data.items);
    }
  }

  async getVideoItemsFromKeyword(keyword: string) {
    if (typeof this.API_KEY === "string") {
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
    } else {
      return this.http
        .fetch("/data/searchKeyword.json", {
          method: "GET",
        })
        .then((data) =>
          data.items.map((item: { id: { videoId: string } }) => ({ ...item, id: item.id.videoId }))
        );
    }
  }
}

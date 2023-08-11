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

  async getVideoItems() {
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

  async getVideoItemsFromKeyword(keyword: string) {
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
}

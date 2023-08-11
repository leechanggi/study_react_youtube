import HttpClient from "../network/http";

export default class VideoService {
  private http: HttpClient;
  private API_KEY: string;

  constructor(httpClient: HttpClient, API_KEY: string) {
    this.http = httpClient;
    this.API_KEY = API_KEY;
  }

  async getVideoItems() {
    return this.http
      .fetch(`/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.API_KEY}`, {
        method: "GET",
      })
      .then((data) => data.items);
    // return this.http
    //   .fetch("/data/hotTrend.json", {
    //     method: "GET",
    //   })
    //   .then((data) => data.items);
  }

  async getVideoItemsFromKeyword(keyword: string) {
    return this.http
      .fetch(`/search?part=snippet&maxResults=25&q=${keyword}&key=${this.API_KEY}`, {
        method: "GET",
      })
      .then((data) =>
        data.items.map((item: { id: { videoId: any } }) => ({ ...item, id: item.id.videoId }))
      );
    // return this.http
    //   .fetch("/data/searchKeyword.json", {
    //     method: "GET",
    //   })
    //   .then((data) =>
    //     data.items.map((item: { id: { videoId: string } }) => ({ ...item, id: item.id.videoId }))
    //   );
  }
}

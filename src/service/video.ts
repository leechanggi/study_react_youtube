import HttpClient from "../network/http";

export default class VideoService {
  private http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  // async getVideoItems() {
  //   return this.http.fetch("/data/hotTrend.json", {
  //     method: "GET",
  //   });
  // }

  async getVideoItems() {
    return this.http.fetch("/data/hotTrend.json", {
      method: "GET",
    });
  }

  async getVideoItemsFromKeyword(keyword: string) {
    return this.http.fetch("/data/searchKeyword.json", {
      method: "GET",
    });
  }
}

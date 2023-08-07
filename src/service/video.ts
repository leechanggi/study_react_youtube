import HttpClient from "../network/http";

export default class VideoService {
  private http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  // For Dev
  async getVideoItems() {
    return this.http.fetch("/data/hotTrend.json", {
      method: "GET",
    });
  }
}

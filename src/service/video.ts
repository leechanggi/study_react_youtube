import HttpClient from "../network/http";

export default class VideoService {
  private http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  // For Dev
  async getVideoItems() {
    return this.http.fetch("/data/videos.json", {
      method: "GET",
    });
  }

  // For DEP
  // async getVideoItems() {
  //   return this.http.fetch(
  //     "/search?part=snippet&maxResults=25&q=bts&key=AIzaSyBQie5S9a3IrxNgedoRi0wmIcACLHenYAE",
  //     {
  //       method: "GET",
  //     }
  //   );
  // }
}

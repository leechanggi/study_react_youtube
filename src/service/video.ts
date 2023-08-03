import HttpClient from "../network/http";

export default class VideoService {
  private http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
}

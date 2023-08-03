export default class VideoService {
  http: any;
  constructor(httpClient: any) {
    this.http = httpClient;
  }
}

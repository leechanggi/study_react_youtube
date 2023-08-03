import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import axiosRetry from "axios-retry";

interface RetryConfig {
  retries: number;
  retryDelaySec: number;
}

const defaultRetryConfig: RetryConfig = {
  retries: 5,
  retryDelaySec: 250,
};

export default class HttpClient {
  private client;

  constructor(baseURL: string, config: RetryConfig = defaultRetryConfig) {
    this.client = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    axiosRetry(this.client, {
      retries: config.retries,
      retryDelay: (retryCount: number) => {
        const delaySec = Math.pow(2, retryCount) * config.retryDelaySec;

        function delayJitter(sec: number) {
          if (sec <= 1000) {
            return sec + sec * 0.1 * Math.random();
          } else {
            return sec + 100 * Math.random();
          }
        }

        return delayJitter(delaySec);
      },
      retryCondition: async (error: AxiosError<unknown, any>) => {
        const isNetworkOrIdempotentError = await axiosRetry.isNetworkOrIdempotentRequestError(
          error
        );
        return isNetworkOrIdempotentError || (error.response && error.response.status === 429)
          ? Promise.resolve(true)
          : false;
      },
    });
  }

  async fetch(url: string, options: AxiosRequestConfig): Promise<any> {
    const { method, headers, data: body } = options;
    const req: AxiosRequestConfig = {
      url,
      method,
      headers,
      data: body,
    };

    try {
      const res: AxiosResponse = await this.client(req);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data;
        const message =
          data && data.message ? data.message : "일시적 네트워크 장애가 발생하였습니다.";
        throw new Error(message);
      }
      throw new Error("일시적 서비스 장애가 발생하였습니다.");
    }
  }
}

import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import axiosRetry from "axios-retry";

interface IRetryConfig {
  retries: number;
  retryDelaySec: number;
}

const retryConfig: IRetryConfig = {
  retries: 5,
  retryDelaySec: 250,
};

export default class HttpClient {
  private client;

  constructor(baseURL: string, config: IRetryConfig = retryConfig) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      // withCredentials: true,
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

  async fetch(url: string, options: AxiosRequestConfig) {
    const { method, headers, data: body, params } = options;
    const req: AxiosRequestConfig = {
      url,
      method,
      headers,
      params,
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

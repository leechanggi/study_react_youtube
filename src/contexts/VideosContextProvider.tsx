import React, { createContext, PropsWithChildren } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import HttpClient from "../network/http";
import VideoService from "../service/video";

const MODE_DEV = Boolean(process.env.REACT_APP_MODE_DEV);
const BASE_URL = process.env.REACT_APP_BASE_URL as string;
const YOUTUBE_URL = process.env.REACT_APP_YOUTUBE_URL as string;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY as string;

const httpClient = MODE_DEV === true ? new HttpClient(BASE_URL) : new HttpClient(YOUTUBE_URL);
const videoService =
  MODE_DEV === true
    ? new VideoService(httpClient, MODE_DEV)
    : new VideoService(httpClient, MODE_DEV, YOUTUBE_API_KEY);

export interface IVideosContext {
  isLoading: boolean;
  isFetching: boolean;
  error: Error | null;
  data: any;
}

export const VideosContext = createContext<IVideosContext>({
  isLoading: false,
  isFetching: false,
  error: null,
  data: {},
});

const VideosContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");

  const queryKey = ["videos", { keyword }];
  const queryFn = async () => {
    if (keyword !== null) {
      return videoService.getVideoItemsFromKeyword(keyword);
    } else {
      return videoService.getVideoItems();
    }
  };
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey,
    queryFn,
    staleTime: 1000 * 60 * 30,
  });

  return (
    <VideosContext.Provider value={{ isLoading, isFetching, error: error as Error | null, data }}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideosContextProvider;

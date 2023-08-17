import React, { createContext, PropsWithChildren } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
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
  videosIsLoading: boolean;
  videosIsFetching: boolean;
  videosError: Error | null;
  videosData: any;
}

export const VideosContext = createContext<IVideosContext>({
  videosIsLoading: false,
  videosIsFetching: false,
  videosError: null,
  videosData: {},
});

const VideosContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const locationPath = location.pathname.split("/");
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("q");

  const queryKey = ["videos", keyword];
  const queryFn = async () => {
    if (locationPath[1] === "videos" && keyword !== null) {
      return videoService.getVideosByKeyword(keyword);
    }
    return videoService.getVideos();
  };
  const { isLoading, isFetching, error, data } = useQuery(queryKey, queryFn, {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <VideosContext.Provider
      value={{
        videosIsLoading: isLoading,
        videosIsFetching: isFetching,
        videosError: error as Error | null,
        videosData: data,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export default VideosContextProvider;

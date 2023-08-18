import React, { createContext, PropsWithChildren, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import HttpClient from "../network/http";
import VideoService from "../service/video";

const MODE_DEV = Boolean(process.env.REACT_APP_MODE_DEV);
const BASE_URL = process.env.REACT_APP_BASE_URL as string;
const YOUTUBE_URL = process.env.REACT_APP_YOUTUBE_URL as string;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY as string;

const httpClient = new HttpClient(MODE_DEV ? BASE_URL : YOUTUBE_URL);
const videoService = new VideoService(httpClient, MODE_DEV, YOUTUBE_API_KEY);

export interface IVideosContext {
  data: any;
  error: Error | null;
  fetchNextPage: any;
  hasNextPage: boolean;
  isLoading: boolean;
  isFetching: boolean;
}

export const VideosContext = createContext<IVideosContext>({
  data: {},
  error: null,
  fetchNextPage: () => {},
  hasNextPage: false,
  isLoading: false,
  isFetching: false,
});

const VideosContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pageToken, setPageToken] = useState<string>();
  const locationPath = useLocation().pathname.split("/");
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");

  // const queryKey = ["videos", keyword, pageToken];
  // const queryFn = async () => {
  //   const queryResult =
  //     locationPath[1] === "videos" && keyword !== null
  //       ? await videoService.getVideosByKeyword(keyword)
  //       : await videoService.getVideos();

  //   setPageToken(queryResult.nextPageToken);
  //   return queryResult.items;
  // };

  const fetchVideos = async ({ pageParam = pageToken }: { pageParam?: string }) => {
    let res: any;
    if (typeof pageParam !== "string") {
      res =
        locationPath[1] === "videos" && keyword !== null
          ? await videoService.getVideosByKeyword(keyword, pageParam)
          : await videoService.getVideos(pageParam);
    }

    res =
      locationPath[1] === "videos" && keyword !== null
        ? await videoService.getVideosByKeyword(keyword)
        : await videoService.getVideos();

    res.nextPageToken && setPageToken(res.nextPageToken);
    return res;
  };

  const { data, error, fetchNextPage, hasNextPage, isLoading, isFetching } = useInfiniteQuery(
    ["videos", keyword],
    fetchVideos,
    {
      getNextPageParam: (lastPage) => lastPage.nextPageToken || null,
    }
  );

  return (
    <VideosContext.Provider
      value={{
        data,
        error: error as Error | null,
        fetchNextPage,
        hasNextPage: Boolean(hasNextPage),
        isLoading,
        isFetching,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export default VideosContextProvider;

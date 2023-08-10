import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HttpClient from "./network/http";
import VideoService from "./service/video";

import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import NotFound from "./pages/NotFound";

import "./styles/index.scss";

const BASE_URL = process.env.REACT_APP_BASE_URL as string;
const YOUTUBE_URL = process.env.REACT_APP_YOUTUBE_URL as string;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY as string;

const httpClient = new HttpClient(BASE_URL);
// const httpClient = new HttpClient(YOUTUBE_URL);
const videoService = new VideoService(httpClient, YOUTUBE_API_KEY);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Videos videoService={videoService} />,
      },
      {
        path: "videos",
        element: <Videos videoService={videoService} />,
      },
      {
        path: "videos/:keyword",
        element: <Videos videoService={videoService} />,
      },
      {
        path: "videos/watch/:videoId",
        element: <VideoDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

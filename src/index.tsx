import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoService from "./service/video";
import HttpClient from "./network/http";
import App from "./App";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import NotFound from "./pages/NotFound";
import "./styles/index.scss";

const MODE_DEV = Boolean(process.env.REACT_APP_MODE_DEV);
const BASE_URL = process.env.REACT_APP_BASE_URL as string;
const YOUTUBE_URL = process.env.REACT_APP_YOUTUBE_URL as string;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY as string;

const httpClient = MODE_DEV === true ? new HttpClient(BASE_URL) : new HttpClient(YOUTUBE_URL);
const videoService =
  MODE_DEV === true
    ? new VideoService(httpClient, MODE_DEV)
    : new VideoService(httpClient, MODE_DEV, YOUTUBE_API_KEY);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "videos/:keyword",
        element: <Videos />,
      },
      {
        path: "videos/watch/:videoId",
        element: <VideoDetail videoService={videoService} />,
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

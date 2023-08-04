import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HttpClient from "./network/http";
import VideoService from "./service/video";

import "./styles/index.scss";

// For DEV
const BASE_URL = process.env.REACT_APP_BASE_URL as string;

// For DEP
const YOUTUBE_URL = process.env.REACT_APP_YOUTUBE_URL as string;

const httpClient = new HttpClient(BASE_URL);
// const httpClient = new HttpClient(YOUTUBE_URL);
const videoService = new VideoService(httpClient);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App videoService={videoService} />
  </React.StrictMode>
);

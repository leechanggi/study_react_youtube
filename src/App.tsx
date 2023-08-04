import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoService from "./service/video";

import Header from "./components/Header";
import Home from "./pages/Home";

import ThemeContextProvider from "./contexts/ThemeContextProvider";

export interface PApp {
  videoService: VideoService;
}

function App({ videoService }: PApp) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home videoService={videoService} />,
    },
  ]);

  return (
    <ThemeContextProvider>
      <div id="App" className="app">
        <Header />
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;

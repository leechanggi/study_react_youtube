import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ko from "javascript-time-ago/locale/ko.json";

import ThemeContextProvider from "./contexts/ThemeContextProvider";
import VideosContextProvider from "./contexts/VideosContextProvider";
import Header from "./components/Header";

const queryClient = new QueryClient();

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ko);

function App() {
  return (
    <div id="App" className="app">
      <ThemeContextProvider>
        <Header />
        <QueryClientProvider client={queryClient}>
          <div className="container">
            <VideosContextProvider>
              <Outlet />
            </VideosContextProvider>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

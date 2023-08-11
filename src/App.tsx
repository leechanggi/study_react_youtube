import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Components
import Header from "./components/Header";

// Provider
import ThemeContextProvider from "./contexts/ThemeContextProvider";
import VideosContextProvider from "./contexts/VideosContextProvider";

// Query
const queryClient = new QueryClient();

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

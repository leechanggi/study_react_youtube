import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Components
import Header from "./components/Header";

// Provider
import ThemeContextProvider from "./contexts/ThemeContextProvider";

// Query
const queryClient = new QueryClient();

function App() {
  return (
    <div id="App" className="app">
      <ThemeContextProvider>
        <Header />
        <div className="container">
          <QueryClientProvider client={queryClient}>
            <Outlet />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </div>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

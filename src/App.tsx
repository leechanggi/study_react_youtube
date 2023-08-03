import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App({ videoService }: any) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home videoService={videoService} />,
    },
  ]);

  return (
    <div id="App" className="app">
      <Header />
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

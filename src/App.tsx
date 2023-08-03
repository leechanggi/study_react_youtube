import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App({ videoService }: any) {
  return (
    <div id="App" className="app">
      <Header />
      <div className="container">
        <RouterProvider router={router} /*videoService={videoService}*/ />
      </div>
    </div>
  );
}

export default App;

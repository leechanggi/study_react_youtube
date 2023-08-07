import { Outlet } from "react-router-dom";

// Components
import Header from "./components/Header";

// Provider
import ThemeContextProvider from "./contexts/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <div id="App" className="app">
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;

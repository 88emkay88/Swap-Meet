import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const element = useRoutes(routes); // handles nested routes properly

  return (
    <>
      <ScrollToTop />
      {element}
    </>
  );
}

export default App;

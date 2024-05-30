import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FullStackDev from "../pages/FullStackDev";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/fsd",
      element: <FullStackDev />,
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

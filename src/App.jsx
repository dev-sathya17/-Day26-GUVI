import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FullStackDev from "./pages/FullStackDev";
import Home from "./pages/Home";
import Courses from "./components/courses/Courses";
import DataScience from "./pages/DataScience";
import CyberSecurity from "./pages/CyberSecurity";
import All from "./pages/All";
import Career from "./pages/Career";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/courses",
      element: <Courses />,
      children: [
        {
          path: "all",
          element: <All />,
        },
        {
          path: "fsd",
          element: <FullStackDev />,
        },
        {
          path: "data-science",
          element: <DataScience />,
        },
        {
          path: "cyber-security",
          element: <CyberSecurity />,
        },
        {
          path: "careers",
          element: <Career />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

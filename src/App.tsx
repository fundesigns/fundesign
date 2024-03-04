import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { CommingSoon } from "./Pages/CommingSoon/CommingSoon";
import { Home } from "./Pages/Home/Home";
import { Works } from "./Pages/Works/Works";
import NotFound from "./Pages/NotFound/NotFound";
import { AboutUs } from "./Pages/AboutUs/AboutUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/works",
      element: <Works />,
    },
    {
      path: "/services",
      element: <CommingSoon />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/careers",
      element: <CommingSoon />,
    },
    {
      path: "/blog",
      element: <CommingSoon />,
    },
    {
      path: "/comingsoon",
      element: <CommingSoon />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

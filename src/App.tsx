import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { CommingSoon } from "./Pages/CommingSoon/CommingSoon";
import { Home } from "./Pages/Home/Home";
import { Works } from "./Pages/Works/Works";

function App() {
  const router = createBrowserRouter([
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
      element: <CommingSoon />,
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

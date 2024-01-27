import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { CommingSoon } from "./Pages/CommingSoon/CommingSoon";
import { Home } from "./Pages/Home/Home";

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
      path: "/comingsoon",
      element: <CommingSoon />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

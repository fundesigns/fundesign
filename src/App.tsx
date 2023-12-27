import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { CommingSoon } from "./Pages/CommingSoon/CommingSoon";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/comingsoon" replace />,
    },
    {
      path: "/comingsoon",
      element: <CommingSoon />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

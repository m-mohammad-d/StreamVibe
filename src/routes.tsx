import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/movies", element: <MoviesPage /> },
    ],
  },
]);

export default router;

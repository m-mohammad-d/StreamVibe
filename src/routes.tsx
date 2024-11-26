import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SupportPage from "./pages/SupportPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/movies", element: <MoviesPage /> },
      { path: "/movie/:Type/:id", element: <MovieDetailPage /> },
      { path: "/support", element: <SupportPage /> },
    ],
  },
]);

export default router;

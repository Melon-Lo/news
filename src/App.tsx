import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { homeLoader } from "./pages/home/homeLoader";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/details/DetailPage";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/news/:article',
        element: <DetailsPage />,
      }
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
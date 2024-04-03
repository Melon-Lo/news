import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
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
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/news/:newsId',
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
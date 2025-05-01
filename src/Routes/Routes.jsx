import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import NewsCard from "../Components/NewsCard";
import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "categories/:id",
        Component: NewsCard,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <span>Loading......</span>,
      },
    ],
  },
  {
    path: "/news/:id",
    element: <NewsDetails />,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <span>Loading... </span>,
  },
]);
export default router;

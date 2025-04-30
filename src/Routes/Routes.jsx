import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import NewsCard from "../Components/NewsCard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "categories/:id", Component: NewsCard },
    ],
  },
]);
export default router;

import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import NewsCard from "../Components/NewsCard";
import NewsDetails from "../Pages/NewsDetails";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import Loader from "../Components/Loader";
import ErrorPage from "../Pages/ErrorPage";

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
        hydrateFallbackElement: <Loader />,
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loader />,
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "/auth/login", Component: Login },
      { path: "/auth/register", Component: Register },
    ],
  },
  { path: "*", Component: ErrorPage },
]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Layout/Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "search house",
        element: <Home></Home>,
      },
      {
        path: "all user",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "login",
    element: <Home></Home>,
  },
  {
    path: "register",
    element: <Regis,
  },
]);

export default router

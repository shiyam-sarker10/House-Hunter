import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Layout/Pages/Home";
import Login from "../Layout/Pages/login";
import Dashboard from './../Layout/Dashboard/Dashboard';
import Register from "../Layout/Pages/Register";



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
        path: "all user",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

export default router

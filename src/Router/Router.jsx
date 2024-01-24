import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Layout/Pages/Home";
import Dashboard from './../Layout/Dashboard/Dashboard';
import Register from "../Layout/Pages/Register";
import OwnerTable from "../Layout/Dashboard/OwnerTable";
import AddHome from "../Layout/Dashboard/AddHome";
import Login from './../Layout/Pages/Login';



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
    children: [
      {
        index:true,
        element:<OwnerTable></OwnerTable>
      },
      {
        path:"/dashboard/add home",
        element:<AddHome></AddHome>
      }
    ]
  },
]);

export default router

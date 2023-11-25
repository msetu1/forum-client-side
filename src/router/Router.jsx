import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Dashboard from "../dashboard/Dashboard";
import ErrorPage from "../components/others/ErrorPage";
import Membership from "../pages/Membership";
import Icon from "../pages/Icon";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateProvider from "../providers/PrivateProvider";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/membership",
          element:
            <Membership></Membership>
        },
        {
          path: "/icon",
          element:
            <PrivateProvider>
              <Icon></Icon>
            </PrivateProvider>,
        },
    ] 
    },
    {
        path: "/dashboard",
        element: <PrivateProvider>
          <Dashboard></Dashboard>
        </PrivateProvider>,
        children: [
          {
            path: "",
            element: <Home></Home>,
          },
      ] 
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
  ]);

export default router;
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
import MyProfile from "../dashboard/MyProfile";
import AddPost from "../dashboard/AddPost";
import MenageUsers from "../dashboard/admin/MenageUsers";
import Announcements from "../dashboard/admin/Announcements";
import MyPosts from "../dashboard/MyPosts";


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
          path: "membership",
          element:
            <Membership></Membership>
        },
        {
          path: "icon",
          element:
            <PrivateProvider>
              <Icon></Icon>
            </PrivateProvider>,
        },
    ] 
    },
    {
        path: "dashboard",
        element: <PrivateProvider>
          <Dashboard></Dashboard>
        </PrivateProvider>,
        children: [
          {
            path: "myProfile",
            element:<MyProfile></MyProfile>,
          },
          {
            path: "addPost",
            element:<AddPost></AddPost>,
          },
          {
            path: "myPost",
            element:<MyPosts></MyPosts>,
          },
          {
            path: "menageUsers",
            element:<MenageUsers></MenageUsers>,
          },
          {
            path: "announcements",
            element:<Announcements></Announcements>,
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
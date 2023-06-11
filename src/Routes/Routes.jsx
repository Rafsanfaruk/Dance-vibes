import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Classes from "../Pages/Classes/Classes";
import InstructorsPage from "../Pages/InstructorPage/InstructorsPage";
import PrivateRoutes from "./PrivateRoutes";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import PrivateAdminRoute from "./PrivateAdminRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import PrivateInstructorRoute from "./PrivateInstructorRoute";
import AddItemClasses from "../Pages/Dashboard/AddItemClasses/AddItemClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>,
      </PrivateRoutes>
    ),
    children: [
      {
        path: "myselectedclasses",
        element: (
          <PrivateRoutes>
            <MySelectedClasses></MySelectedClasses>,
          </PrivateRoutes>
        ),
      },
      {
        path: "enrollclasses",
        element: (
          <PrivateRoutes>
            <MyEnrolledClasses></MyEnrolledClasses>,
          </PrivateRoutes>
        ),
      },
      {
        path: "allusers",
        element: (
          <PrivateAdminRoute>
            <AllUsers></AllUsers>
          </PrivateAdminRoute>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <PrivateAdminRoute>
            <ManageClasses></ManageClasses>
          </PrivateAdminRoute>
        ),
      },
      {
        path: "additemclasses",
        element: (
          <PrivateInstructorRoute>
            <AddItemClasses></AddItemClasses>
          </PrivateInstructorRoute>
        ),
      },
    ],
  },
]);

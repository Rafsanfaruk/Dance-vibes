import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Classes from "../Pages/Classes/Classes";
import InstructorsPage from "../Pages/InstructorPage/InstructorsPage";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layouts/Dashboard";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:"/registration",
          element: <Registration></Registration>
        },
        {
          path:'classes',
          element: <Classes></Classes>
        },
        {
          path:'instructors',
          element: <PrivateRoutes>
            <InstructorsPage></InstructorsPage>
          </PrivateRoutes>
        },

    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoutes>
      <Dashboard></Dashboard>,
    </PrivateRoutes>,
    children:[
      {
        path:'myselectedclasses',
        element:<MySelectedClasses></MySelectedClasses>
      },
      {
        path:'enrollclasses',
        element: <MyEnrolledClasses></MyEnrolledClasses>
      }
    ]
  }
]);

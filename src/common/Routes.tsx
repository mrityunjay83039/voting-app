import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RootLayout from "../pages/RootLayout";
import Candidates from "../pages/Candidates";
import ElectionDetails from "../pages/ElectionDetails";
import Congrats from "../pages/Congrats";
import Logout from "../pages/Logout";
import ErrorPage from "../pages/ErrorPage";

const FrontendRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      
      {
        index:true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "elections/:id/candidates",
        element: <Candidates />,
      },
      {
        path: "elections/:id",
        element: <ElectionDetails />,
      },
      {
        path: "congrats",
        element: <Congrats />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "pagenotfound",
        element: <ErrorPage/>
      }
     
    ],
  },
]);

export default FrontendRoutes;

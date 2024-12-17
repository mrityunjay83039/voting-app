import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const FrontendRoutes = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

export default FrontendRoutes;

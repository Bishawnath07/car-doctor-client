import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/' ,
            element:<Home></Home>
        },
        {
            path: '/login' ,
            element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;
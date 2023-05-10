import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";

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
        } ,
        {
          path: 'signup' ,
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;
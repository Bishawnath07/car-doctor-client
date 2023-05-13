import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import BookService from "../Components/Pages/BookService/BookService";
import Bookings from "../Components/Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
        } ,
        {
          path: 'book/:id', 
          element: <PrivateRoute><BookService></BookService></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-six-alpha.vercel.app/services/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        }
      ]
    },
  ]);

  export default router;
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/NotFound";
import MyCart from "../pages/dashboard/MyCart";
import Reservation from "../pages/dashboard/Reservation";
import AllUsers from "../pages/dashboard/admin/AllUsers";
import AddItem from "../pages/dashboard/admin/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateItem from "../pages/dashboard/admin/UpdateItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/shop/:category",
                element: <Shop></Shop>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // user routes
            {
                path: "my-cart",
                element: <MyCart></MyCart>
            },
            {
                path: "reservation",
                element: <Reservation></Reservation>
            },
            // admin routes
            {
                path: "all-users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "add-item",
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: "manage-items",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: "update-item/:id",
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
]);

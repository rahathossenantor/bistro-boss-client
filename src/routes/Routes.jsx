import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
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
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);

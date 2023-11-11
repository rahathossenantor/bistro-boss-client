import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json
// https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/reviews.json

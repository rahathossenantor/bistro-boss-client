import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);

// https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json
// https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/reviews.json

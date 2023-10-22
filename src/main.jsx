import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/index.jsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

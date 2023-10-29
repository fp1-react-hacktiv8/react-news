import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Indonesia from "@pages/indonesia";
import Covid from "@pages/covid";
import Programming from "@pages/programming";
import Sports from "@pages/sports";
import Politics from "@pages/politics";
import Search from "@pages/search";
import Saved from "@pages/saved";
import { Provider } from "react-redux";
import store from "./redux/store";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Indonesia />,
  },
  {
    path: "/covid",
    element: <Covid />,
  },
  {
    path: "/programming",
    element: <Programming />,
  },
  {
    path: "/sports",
    element: <Sports />,
  },
  {
    path: "/politics",
    element: <Politics />,
  },
  {
    path: "/search/:search",
    element: <Search />,
  },
  {
    path: "/saved",
    element: <Saved />,
  },
  {
    path: "*",
    element: (
      <div className="flex justify-center items-center h-screen text-3xl">
        Not Found 404
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChampionsProvider } from "./contexts/ChampionsContext.jsx";
import App from "./pages/App.jsx";
import Home from "./pages/Home.jsx";
import Game1 from "./pages/Game1.jsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game1/menu",
        element: <Game1 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChampionsProvider>
    <RouterProvider router={router} />
  </ChampionsProvider>
);

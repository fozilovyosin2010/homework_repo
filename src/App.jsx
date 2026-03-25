import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "catalog", element: <Catalog /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

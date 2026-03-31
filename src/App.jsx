import React, { Component } from "react";

import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./Layout/Layout";
import InfoId from "./Pages/InfoId";
import Home from "./Pages/Home";

class App extends Component {
  router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "info/:id", element: <InfoId /> },
      ],
    },
  ]);

  render() {
    return <RouterProvider router={this.router} />;
  }
}
export default App;

// rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// hooks
import { useState } from "react";
import { useEffect } from "react";
// layout
import RootLayout from "./layout/RootLayout";
// pages
import Home from "./pages/Home";
import InvoisePage from "./pages/InvoisePage";

function App() {
  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'invoicepage/:id',
          element: <InvoisePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={roots} />;
}

export default App;

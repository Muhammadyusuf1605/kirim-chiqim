// rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// hooks
import { useFetch } from "./hooks/useFetch";
// layout
import RootLayout from "./layout/RootLayout";
// components
import Header from "./components/Header";
// pages
import Home from "./pages/Home";


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
      ],
    },
  ]);

  return <RouterProvider router={roots} />;
}

export default App;



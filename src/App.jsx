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
import { useFetch } from "./hooks/useFetch";

function App() {
  // const api = "http://localhost:3000/data";
  // const api1 = `http://localhost:3000/data/:${invoiceId}`;
  // const url = useFetch(api);
  const [invoiceId, setInvoiceId] = useState(null);

  useEffect(() => {
    console.log(invoiceId);
  }, []);
  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home setInvoiceId={setInvoiceId} />,
        },
        {
          path: `invoicepage/:${invoiceId}`,
          element: <InvoisePage invoiceId={invoiceId} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={roots} />;
}

export default App;

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import Header, { loader as CategoriesLoader } from "./layout/Header";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import CartDetailsPage from "./pages/CartDetailsPage";

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <L />,
    // },
    {
      path: "/",
      element: <Header />,
      id: "Home",
      loader: CategoriesLoader,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {

          path: "/products",
          element: <Products />,
          // loader: VisitorLoader,
        },
        {
          path: "/cart",
          element: <CartDetailsPage />,
          // loader: MeetingsLoader,
        },

        // {
        //   path: "/employees",
        //   element: <Employees />,
        // },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position='top-right'
        reverseOrder={false}
      />
      {/* <Header /> */}
    </>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ShopPage from "./ShopPage";
import ErrorPage from "./ErrorPage";
import CartPage from "./CartPage";
import { useState } from 'react'

const Router = () => {
  const [cartItems, setCartItems] = useState([]);//idk if this will work

    const router = createBrowserRouter([
      {
        path: "/",
        element: <App cartItems={cartItems} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "ShopPage",
        element: <ShopPage cartItems={cartItems} />,
      },
      {
        path: "CartPage",
        element: <CartPage cartItems={cartItems} />,
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ShopPage from "./ShopPage";
import ErrorPage from "./ErrorPage";
import CartPage from "./CartPage";

import { ShopContextProvider } from "../context/ShopContext";

const Router = () => {


  
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: "ShopPage",
        element: <ShopPage />,
      },
      {
        path: "CartPage",
        element: <CartPage />,
      },
    ]);
  
    return (<ShopContextProvider><RouterProvider router={router} /></ShopContextProvider>)
  }
  
  export default Router;
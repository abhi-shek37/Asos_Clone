import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login";
import MenHome from "./pages/MenHome";
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Favourites from "./pages/Favourites";
import CartContextProvider from "./store/CartContextProvider";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import PaymentConfirmation from "./pages/PaymentConfirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/men",
    element: <MenHome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },{
    path: "/product/:id",
    element: <ProductDetails/>
  },{
    path: "/checkout",
    element: <Checkout /> ,
  },
  {
    path: "/payment-confirmation",
    element: <PaymentConfirmation /> ,
  }
]);
const App = () => {
  return (
    <>
    <CartContextProvider>
      <RouterProvider router={router}/>
      </CartContextProvider>
    </>
  );
};

export default App;

import { Counter } from "./features/counter/Counter";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home.js";
import Loginpage from "./pages/Loginpage.js";
import Signuppage from "./pages/Signuppage.js";
import Cartpage from "./pages/Cartpage.js";
import Checkout from "./pages/Checkout.js";
import Productdetailpage from "./pages/Productdetailpage.js";
import Protected from "./features/auth/component/Protected.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice.js";
import { selectLoggedInUser } from "./features/auth/AuthSlice.js";
import PageNotFound from "./pages/404.js";
import Ordersuccesspage from "./pages/Ordersuccesspage.js";
import UserOrders from "./features/user/components/UserOrders.js";
import Product from "./pages/Product.js";
import Navbar from "./features/navbar/Navbar.js";
import Logout from "./features/auth/component/Logout.js";
import Forgotpassword from "./features/auth/component/ForgotPassword.js";
import Adminproductdetailpage from "./pages/Adminproductdetailpage.js";
import Adminproductlistpage from "./pages/Adminproductlistpage.js";
import ProtectedAdmin from "./features/auth/component/ProtectedAdmin.js";
import UserProfile from "./features/user/components/UserProfile.js";
import ProductForm from "./features/admin/component/ProductForm.js";
import Adminorderspage from "./pages/Adminorderspage.js";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/Logout",
    element: <Logout />,
  },
  {
    path: "/Forgotpassword",
    element: <Forgotpassword />,
  },
  {
    path: "/signup",
    element: <Signuppage />,
  },

  {
    path: "/Cartpage",
    element: (
      <Protected>
        <Cartpage />
      </Protected>
    ),
  },
  {
    path: "/Product",
    element: (
      <Protected>
        <Product />
      </Protected>
    ),
  },
  {
    path: "/Checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
  {
    path: "/Productdetailpage/:id",
    element: <Productdetailpage />,
  },
  {
    path: "/admin/Adminproductdetailpage/:id",
    element: (
      <ProtectedAdmin>
        <Adminproductdetailpage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/ProductForm",
    element: (
      <ProtectedAdmin>
        <ProductForm />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/Adminorderspage/",
    element: (
      <ProtectedAdmin>
        <Adminorderspage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/ProductForm/edit/:id",
    element: (
      <ProtectedAdmin>
        <ProductForm />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <Adminproductlistpage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/UserOrders/",
    element: <UserOrders />,
  },

  {
    path: "/Ordersuccesspage/:id",
    element: <Ordersuccesspage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);
  return (
    <div className="">
      <div className="App">
        <div className="">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

export default App;

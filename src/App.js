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
    path: "login",
    element: <Loginpage />,
  },
  {
    path: "signup",
    element: <Signuppage />,
  },
  {
    path: "Cartpage",
    element: (
      <Protected>
        <Cartpage />
      </Protected>
    ),
  },
  {
    path: "Checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "Productdetailpage/:id",
    element: (
      <Protected>
        <Productdetailpage />
      </Protected>
    ),
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

import { Counter } from './features/counter/Counter';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home.js';
import Loginpage from './pages/Loginpage.js';
import Signuppage from './pages/Signuppage.js';
import Cartpage from './pages/Cartpage.js';
import Checkout from './pages/Checkout.js';
import Productdetailpage from './pages/Productdetailpage.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    element: <Cartpage/>,
  },
  {
    path: "Checkout",
    element: <Checkout/>,
  },
  {
    path: "Productdetailpage",
    element: <Productdetailpage/>,
  },

]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;

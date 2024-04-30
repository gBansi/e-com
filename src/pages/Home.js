import { Link } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import Productlist from "../features/product-list/component/Productlist";
import img1 from "../image/a-1.jpg";
function Home() {
  return (
    <div>
      <Navbar>
        {/* <Productlist/> */}
        <h1>Homepage</h1>
        <div>
          <img src={img1} />
        </div>
        <Link to="/admin">Admin</Link>
      </Navbar>
    </div>
  );
}

export default Home;

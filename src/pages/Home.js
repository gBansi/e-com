import { Link } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import Productlist from "../features/product-list/component/Productlist";

function Home() {
    return ( 
        <div>
            <Navbar>
                {/* <Productlist/> */}
                <h1>Homepage</h1>
                <Link to='/admin'>Admin</Link>

            </Navbar>
        </div>
     );
}

export default Home;
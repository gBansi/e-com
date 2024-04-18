import Navbar from "../features/navbar/Navbar";
import Productlist from "../features/product-list/component/Productlist";

function Home() {
    return ( 
        <div>
            <Navbar>
                {/* <Productlist/> */}
                <h1>Homepage</h1>
            </Navbar>
        </div>
     );
}

export default Home;
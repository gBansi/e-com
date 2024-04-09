import Navbar from "../features/counter/Navbar";
import Productlist from "../features/product-list/component/Productlist";

function Home() {
    return ( 
        <div>
            <Navbar>
                <Productlist/>
            </Navbar>
        </div>
     );
}

export default Home;
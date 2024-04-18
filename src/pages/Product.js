import React from 'react'
import Productlist from '../features/product-list/component/Productlist'
import Navbar from '../features/navbar/Navbar';

const Product = () => {
    return (
        <div>
            <Navbar/>
            <Productlist />
        </div>
    )
}

export default Product;
import React from 'react'
import Productdetails from '../features/product-list/component/Productdetails'
import Navbar from '../features/navbar/Navbar'

const Productdetailpage = () => {
    return (
        <div>
            <Navbar>
                <Productdetails />
            </Navbar>
        </div>
    )
}

export default Productdetailpage
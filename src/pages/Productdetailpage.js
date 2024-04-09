import React from 'react'
import Productdetails from '../features/product-list/component/Productdetails'
import Navbar from '../features/counter/Navbar'

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
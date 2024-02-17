import React from 'react'
import { FaCartPlus } from "react-icons/fa6";


const HandleAddToCart = ({propertyData}) => {

    const handleAddToCart = () => {
        console.log('yoo add to cart');
    }

    return <button onClick={handleAddToCart} className="btn bg-secondary hover:bg-blue-800 text-white text-xl flex items-center justify-center gap-2 py-2">
        <FaCartPlus /> {propertyData?.rentCheckbox ? "Rent" : "Buy"}
    </button>
}

export default HandleAddToCart

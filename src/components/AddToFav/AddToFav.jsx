import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const AddToFav = ({userId, propertyId}) => {

    const handleAddToFav = () => {
        
    }

    return (
        <button onClick={handleAddToFav} className=" btn bg-secondary hover:bg-blue-800 text-white text-xl flex items-center justify-center gap-2 py-2">
            <FaRegHeart /> Favourite
        </button>
    )
}

export default AddToFav

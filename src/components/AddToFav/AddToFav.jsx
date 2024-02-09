"use client";


import React, { useEffect } from 'react'
import { LuHeart, LuHeartOff } from "react-icons/lu";


const AddToFav = ({ handleFav, data }) => {
       
    return (
        <>
            <button onClick={handleFav} className=" btn bg-secondary hover:bg-blue-800 text-white text-xl flex items-center justify-center gap-2 py-2">
               
                {
                    data?.isFound ? <><LuHeartOff /> Unfavourite </> :
                        <><LuHeart /> Favourite</>
                }
            </button>
        </>
    )
}



export default AddToFav;

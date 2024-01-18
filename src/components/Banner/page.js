import React from 'react';
import ban1 from '../../../public/assets/Images/Banner/banner1.jpg'
import './styles.css'
const page = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="container carousel-item relative w-full">
                <img src={ban1} className="image rounded-md w-full" alt='' />

                <div className="absolute inset-0 bottom-10 flex-col  justify-center items-center">
                    <div className='flex-col justify-center gap-5 items-center mt-[25%]'>
                        <h1 className='text-white text-xl md:text-2xl lg:text-4xl font-bold text-center'>Search properties for sale and for rent in Bangladesh</h1>
                        <div className='rounded-lg bg-[rgba(0,0,0,0.5)] mx-16 p-10 mt-10 md:grid lg:grid grid-cols-3 gap-0 hidden md:visible lg:visible'>
                            <div className=''>
                                <select className="select select-info w-3/4 max-w-xs mb-2">
                                    <option disabled selected>Rent</option>
                                    <option>Buy</option>
                                    <option>Rent</option>
                                </select>
                                <select className="select select-info w-3/4 max-w-xs">
                                    <option disabled selected>Type</option>
                                    <option>Apartment</option>
                                    <option>Duplex</option>
                                    <option>Land</option>
                                    <option>Building</option>
                                </select>
                            </div>
                            <div className=''>
                                <input type="text" placeholder="Enter your location" className="input input-bordered input-info w-full mb-2 " />
                                <div className='flex gap-2'>
                                    <select className="select select-info w-3/4 max-w-xs">
                                        <option disabled selected>Area(Sqft)</option>
                                        <option>100</option>
                                        <option>150</option>
                                        <option>200</option>
                                        <option>250</option>
                                        {/* <option><input type="text" className="input input-bordered input-info w-full mb-2 " /></option> */}
                                    </select>
                                    <input type="text" placeholder='price' className="input input-bordered input-info w-full mb-2 " />
                                </div>
                            </div>
                            <div className=''>
                                <select className="select select-info w-3/4 max-w-xs">
                                    <option disabled selected>Residental</option>
                                    <option>Pent House</option>
                                    <option>Plaza</option>
                                </select>
                                <br />
                                <button className='btn btn-info w-3/4 mt-2'>Find</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between gap-x-5 mt-5 lg:text-6xl'>

                    </div>
                    <div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default page;
"use client";

import { authContext } from '@/context/authContext/AuthProvider';
import Link from 'next/link';
import { MdOutlineHomeWork } from "react-icons/md";
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

const Navbar = () => {
    const pathName = usePathname();
    const [hideLogic, setHideLogic] = useState();
    const { currentUser } = useContext(authContext);

    console.log(currentUser);

    useEffect(() => {
        const logic = currentUser != null ? true : false;
        setHideLogic(logic);
    }, [])

    const navLinks = [
        {
            link: "/",
            text: "Home",
            hide: false
        },
        {
            link: "/properties",
            text: "Properties",
            hide: false
        },
        {
            link: "/about",
            text: "About",
            hide: false
        },
        {
            link: "/contact",
            text: "Contact",
            hide: false
        }

    ]


    return (
        <div className="navbar shadow-md bg-base-100">
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map((menuItem, index) => {
                            return !menuItem.hide &&
                                <li
                                    key={index}
                                    className={
                                        `${menuItem.link === pathName ? "rounded bg-secondary text-white" : ""}`
                                    }>
                                    <Link href={menuItem.link}>
                                        {menuItem.text}
                                    </Link>
                                </li>
                        })
                    }
                </ul>
            </div>
            <div className="lg:hidden navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks.map((menuItem, index) => {
                                return !menuItem.hide &&
                                !menuItem.hide &&
                                <li
                                    key={index}
                                    className={
                                        `${menuItem.link === pathName ? "rounded bg-secondary text-white" : ""}`
                                    }>
                                    <Link href={menuItem.link}>
                                        {menuItem.text}
                                    </Link>
                                </li>
                            })
                        }
                        <div className="flex justify-center mt-4 ">
                            {
                                !hideLogic &&
                                <Link href="/login" className="btn hover:bg-blue-800 md:btn-md btn-sm bg-secondary text-white">Login/Register</Link>

                            }
                        </div>
                    </ul>

                </div>

            </div>
            <div className="navbar-center">

                <Link href="/" className="flex  items-center gap-2 ">
                    <span className='text-lg md:text-3xl bg-secondary p-2 text-white rounded-full'><MdOutlineHomeWork /></span> Home Vista
                </Link>
            </div>

            <div className="navbar-end ">
                <div className="flex justify-end md:flex hidden">
                    {
                        !hideLogic &&
                        <Link href="/login" className="btn hover:bg-blue-800 md:btn-md btn-sm bg-secondary text-white">Login/Register</Link>

                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar

"use client";

import { authContext } from '@/context/authContext/AuthProvider';
import Link from 'next/link';
import { Alert, Button, Space, message } from 'antd';
import { MdOutlineHomeWork } from "react-icons/md";
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const pathName = usePathname();
    const [hideLogic, setHideLogic] = useState();
    const { logOut, currentUser } = useContext(authContext);
    const [messageApi, contextHolder] = message.useMessage();

    console.log(currentUser);

    useEffect(() => {
        const logic = currentUser?.user ? true : false;
        setHideLogic(logic);
    }, []);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                messageApi.open({
                    type: 'success',
                    content: 'Logout successfully',
                });
                router.push("/login");
            })
            .catch(err => console.log(err));
    }

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
            {contextHolder}
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
                                !currentUser &&
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

            <div className="navbar-end">
                <div className=" justify-end md:flex hidden">
                    {
                        !currentUser &&
                        <Link href="/login" className="btn hover:bg-blue-800 md:btn-md btn-sm bg-secondary text-white">Login/Register</Link>

                    }
                </div>
                {
                    currentUser &&

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={currentUser?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <button onClick={handleLogOut} className='btn mt-4
                     text-white bg-secondary hover:bg-blue-800'>Logout</button>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar

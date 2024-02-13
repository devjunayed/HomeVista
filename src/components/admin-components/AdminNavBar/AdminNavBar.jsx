"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaHouse, FaHouseUser, FaUsers } from 'react-icons/fa6'
import { LuMessageSquare, LuTableProperties } from 'react-icons/lu'
import { MdReport } from 'react-icons/md'

const AdminNavBar = () => {
  const pathName = usePathname();
  const links = [
    {
      link: "/dashboard/admin",
      icon: <FaHouse />,
      linkText: "Dashboard"
    },
    {
      link: "/dashboard/admin/manage-users",
      icon: <FaUsers />,
      linkText: "Manage User"
    },
    {
      link: "/dashboard/admin/manage-properties",
      icon: <LuTableProperties />,
      linkText: "Manage Properties"
    },
    {
      link: "/dashboard/admin/users-reports",
      icon: <MdReport />,
      linkText: "Users Report"
    },
    {
      link: "/dashboard/admin/messages",
      icon: <LuMessageSquare />,
      linkText: "Messages"
    }
  ]

  return (
    <ul className="menu rounded-none text-left bg-gray-200 gap-1  ">
      {
        links.map(
          (link, index) => <li key={index}>
            <Link className={`${link.link == pathName ? "active:bg-white bg-white" : ""} flex focus:bg-white pr-4 md:pr-8 e lg:pr-12  text-sm md:text-md lg:text-base -mr-4 flex-row items-center justify-start`} href={link.link}>
              {link.icon} {link.linkText}
            </Link>
          </li>
        )
      }
    </ul>
  )
}

export default AdminNavBar

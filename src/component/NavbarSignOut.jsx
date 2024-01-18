"use client";
import { useContext } from "react";
import { authContext } from "@/app/authContext/AuthProvider";

const NavbarSignOut = () => {
  const { currentUser } = useContext(authContext);
  console.log(currentUser);
  return (
    <div>
      {currentUser ? (
        <div className="flex items-center hover:text-gray-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ) : (
        <button className={""}>Login</button>
      )}
    </div>
  );
};

export default NavbarSignOut;

"use client";
import { useContext } from "react";
import { authContext } from "@/app/authContext/AuthProvider";
import { Avatar, Button, Dropdown } from "antd";
import Link from "next/link";

const NavbarSignOut = () => {
  const { currentUser } = useContext(authContext);
  console.log(currentUser);
  const items = [
    {
      key: "1",
      label: (
        <div className={"relative pt-4"}>
          <Avatar
            src={
              currentUser?.photoURL ? currentUser.photoURL : "gameravatar.png"
            }
            className={"absolute left-[50%] -translate-x-[50%] "}
          />
          <div className={"mt-2"}>
            <p className={"text-sm text-center mb-2 font-medium text-gray-900"}>
              {currentUser?.displayName}
            </p>
            <Button>View Profile</Button>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      {currentUser ? (
        <div className="flex items-center hover:text-gray-200 cursor-pointer">
          <Dropdown
            menu={{
              items,
            }}
          >
            <Avatar
              className="h-10 w-10 rounded-full"
              src={
                currentUser.photoURL ? currentUser.photoURL : "gameravatar.png"
              }
            />
          </Dropdown>
        </div>
      ) : (
        <div>
        <Link href="/login">Login</Link>
        <Link href="/register">/Register</Link>
        </div>
      )}
    </div>
  );
};

export default NavbarSignOut;

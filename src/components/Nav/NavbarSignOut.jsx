"use client";
import { useContext } from "react";
import { authContext } from "@/context/authContext/AuthProvider";
import { Avatar, Button, Dropdown, message } from "antd";
import auth from "../../../firebase.config";
import { signOut } from "firebase/auth";
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
            <Button
              onClick={() =>
                signOut(auth).then(() => {
                  return message.success("Sign Out Successfully");
                })
              }
            >
              Sign Out
            </Button>
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
          <Link
            href={"/register"}
            className={
              " bg-regularBlue px-4 transition-all  py-2 text-black font-bold rounded-[6px] cursor-pointer "
            }
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarSignOut;

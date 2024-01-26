"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ActiveLink = () => {
  const pathname = usePathname();
  return (
    <div className={"space-x-[2rem] flex items-center"}>
      <Link
        className={
          pathname === "/"
            ? "rounded-[1.875rem] bg-[#4361EE4D] px-[1.2rem] py-[0.5rem] font-medium "
            : ""
        }
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={
          pathname === "/listing"
            ? "rounded-[1.875rem] bg-[#4361EE4D] px-[1.2rem] py-[0.5rem] font-medium "
            : ""
        }
        href={"/listing"}
      >
        Listing
      </Link>
      <Link
        className={
          pathname === "/about"
            ? "rounded-[1.875rem] bg-[#4361EE4D] px-[1.2rem] py-[0.5rem] font-medium "
            : ""
        }
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={
          pathname === "/contact"
            ? "rounded-[1.875rem] bg-[#4361EE4D] px-[1.2rem] py-[0.5rem] font-medium "
            : ""
        }
        href={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
};

export default ActiveLink;

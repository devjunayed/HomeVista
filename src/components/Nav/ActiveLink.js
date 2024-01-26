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
          pathname === "/propertyes"
            ? "rounded-[1.875rem] bg-[#4361EE4D] px-[1.2rem] py-[0.5rem] font-medium "
            : ""
        }
        href={"/propertyes"}
      >
        Property
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
      <Link
        className={
          pathname === "/cart-items"
            ? "rounded-[1.875rem] bg-[#4361EE4D] px-[1.2rem] py-[0.5rem] font-medium "
            : ""
        }
        href={"/ccart-items"}
      >
        Cart
      </Link>
    </div>
  );
};

export default ActiveLink;

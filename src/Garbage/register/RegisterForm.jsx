"use client";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { useContext } from "react";
import { authContext } from "@/context/authContext/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const handleSubmit = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
          await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: name,
              email: email,
            }),
          }).then((res) => res.json());

          return updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            router.push("/");
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action={handleSubmit}
      className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
    >
      <div className="pb-2 pt-4">
        <h4 className={"text-left text-[0.875rem] font-normal text-[#4F4F4F]"}>
          Name
        </h4>
        <input
          type="text"
          name="name"
          id="name"
          className="block focus:shadow-md transition border border-[#CACACA]  h-[3rem] w-full outline-none p-4 text-lg rounded-[0.125rem]"
          required
        />
      </div>
      <div className="pb-2 pt-4">
        <h4 className={"text-left text-[0.875rem] font-normal text-[#4F4F4F]"}>
          Email
        </h4>
        <input
          type="email"
          name="email"
          id="email"
          className="block focus:shadow-md transition border border-[#CACACA]  h-[3rem] w-full outline-none p-4 text-lg rounded-[0.125rem]"
          required
        />
      </div>
      <div className="pb-2 pt-4">
        <h4 className={"text-left text-[0.875rem] font-normal text-[#4F4F4F]"}>
          Password
        </h4>
        <input
          type="password"
          name="password"
          id="password"
          className="block focus:shadow-md transition border border-[#CACACA]  h-[3rem] w-full outline-none p-4 text-lg rounded-[0.125rem]"
          required
        />
      </div>
      <div className="px-4 pb-2 pt-4">
        <input
          className=" bg-[#3A0CA3] block w-full  cursor-pointer px-[10.38rem] py-[0.5rem] text-[0.9375rem]  font-normal  text-white focus:outline-none  rounded-[0.9375rem]"
          type={"submit"}
          value={"Sign Up"}
        />
      </div>
      <p className={"text-center mt-3 font-medium text-gray-600"}>
        Already An User?{" "}
        <Link href={"/login"} className={"text-[#3A0CA3]"}>
          Login
        </Link>{" "}
      </p>
    </form>
  );
};

export default RegisterForm;

import Image from "next/image";
import RegisterForm from "@/app/register/RegisterForm";
import GoogleSignUp from "@/app/register/GoogleSignUp";

const Register = async () => {
  return (
    <div>
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage: "url(loginBanner.jpg)",
          }}
        >
          <div className="absolute bg-gray-800 opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl text-gray-100 font-bold text-left tracking-wide">
              Find Your Best Possibilities
            </h1>
            <p className="text-3xl my-4 font-medium ">
              Buy Your{" "}
              <span className={"text-gray-800 bg-cyan-200 rounded p-1"}>
                Dream Home
              </span>
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center  justify-center text-center md:px-16 px-0 z-0">
          <div className="w-full py-6 z-20 text-black  mx-4 lg:mx-0 rounded lg:bg-white">
            <h1 className="my-6 text-3xl font-bold">Register With</h1>
            <GoogleSignUp />
            <p className=" text-gray-500 font-medium text-xl">
              or use your email
            </p>
            <RegisterForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

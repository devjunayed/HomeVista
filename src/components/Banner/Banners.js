import Image from "next/image";
import BannerSelectionForm from "@/components/Banner/BannerSelectionForm";
import Brand from "@/components/Brand/Brand";

const Banners = () => {
  return (
    <div className={" "}>
      <div
        className={
          "w-full  pb-[7.6rem]  rounded-[0px_0px_800px_800px] bg-gradient-to-b from-[#4cc9f000] to-[#4361ee4d] z-0"
        }
      >
        <div className={"2xl:px-[10rem] pt-[5.56rem] z-10"}>
          <h1
            className={
              "text-[1.2125rem] ml-[5.2rem] font-medium leading-normal text-[#4361EE] tracking-[0.18188rem] "
            }
          >
            REAL ESTATE
          </h1>
          <div
            className={
              "flex items-center justify-center xl:gap-[12rem] 2xl:gap-[27rem]"
            }
          >
            <div className={"mt-[1.87rem]  "}>
              <h1
                className={
                  "2xl:text-[3.58125rem] text-[2.58125rem] font-semibold text-[#0B090A] not-italic leading-[4.0625rem]"
                }
              >
                Find a perfect <br /> home you love..!
              </h1>
              <p
                className={
                  "mt-[2.5rem] text-[#808080] font-normal text-[1rem] leading-[1.625rem]"
                }
              >
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.{" "}
                <br />
                Integer a dolor eu sapien sodales vulputate ac in purus.
              </p>
              <div className={"relative"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="61"
                  viewBox="0 0 61 61"
                  fill="none"
                  className={"text-end -mb-[3rem] relative float-right"}
                >
                  <circle
                    cx="30.1698"
                    cy="30.1699"
                    r="30"
                    transform="rotate(30 30.1698 30.1699)"
                    fill="url(#paint0_linear_29_153)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_29_153"
                      x1="30.1698"
                      y1="0.16988"
                      x2="30.1698"
                      y2="60.1699"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4361EE" />
                      <stop offset="1" stopColor="#4361EE" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <Image
                  src={"/banner-demo.png"}
                  alt="home"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className={""}>
              <div className={"w-[26.25rem] h-[36.375rem]  drop-shadow-xl"}>
                <div
                  className={
                    "flex items-center pl-[5.19rem] pr-[5.12rem] pt-[2.5rem] pb-[1.81rem] justify-between rounded-t-[1.25rem] bg-[#FEFEFE] z-50 border-b-[3px] "
                  }
                >
                  <h1 className={"text-[1rem] font-medium text-[#808080]"}>
                    For Sale
                  </h1>
                  <h1 className={"text-[1rem] font-medium text-[#808080]"}>
                    For Rent
                  </h1>
                </div>
                <div
                  className={
                    "2xl:px-[2.5rem] px-[1rem] pb-[3.75rem] pt-[3.13rem] bg-white rounded-b-[1.25rem] "
                  }
                >
                  <BannerSelectionForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={"flex items-center justify-center -mt-10"}>
          <div
            className="px-[2.31rem] py-[1.75rem] w-[22.5rem] h-full bg-white rounded-[3.125rem] gap-2 flex items-center justify-between"
            style={{ boxShadow: "10px 30px 50px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <Image
                    width={200}
                    height={200}
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <Image
                    width={200}
                    height={200}
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <Image
                    width={200}
                    height={200}
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
            <h1 className={"font-medium text-[1.2125rem] "}>
              72k+ Happy Customers
            </h1>
          </div>
        </div>
        <Brand />
      </div>
    </div>
  );
};

export default Banners;

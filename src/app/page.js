import Banners from "@/components/Home/Banner/Banners";
import Brand from "@/components/Home/Brand/Brand";

import WhoWeAre from "@/components/Home/Who we are/WhoWeAre";
export default async function Home() {
  const data = await fetch(
    "https://home-vista.vercel.app/api/get-property",
  ).then((res) => res.json());
  console.log(data);

  return (
    <>
      <div className="">
        <Banners />

        <Brand />
        <WhoWeAre />
      </div>
    </>
  );
}

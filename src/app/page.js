import Banners from "@/components/Home/Banner/Banners";
import Brand from "@/components/Home/Brand/Brand";

import WhoWeAre from "@/components/Home/Who we are/WhoWeAre";
export default async function Home() {
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

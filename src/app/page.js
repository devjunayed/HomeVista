import Banners from "@/components/Home/Banner/Banners";
import Brand from "@/components/Home/Brand/Brand";
import WhoWeAre from "@/components/Home/Who we are/WhoWeAre";
import OurService from "@/components/Home/Our Service/OurService";

export default async function Home() {
  return (
    <>
      <div className="">
        <Banners />
        <Brand />
        <WhoWeAre />
        {/*property section*/}
        <OurService />
      </div>
    </>
  );
}

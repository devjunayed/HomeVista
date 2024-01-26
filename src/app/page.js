import Banners from "@/components/Banner/Banners";
import Brand from "@/components/Brand/Brand";
import TabProperty from "@/components/TabPropety/TabProperty";
export default async function Home() {
  return (
    <>
      <div className="">
        <Banners />
        <TabProperty />
        <Brand />
      </div>
    </>
  );
}
